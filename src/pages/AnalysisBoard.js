import React from 'react';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import PieceCustomize from '../components/customization/PieceCustomize.js';
import './AnalysisBoard.css';

class AnalysisBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      sparePiece: 'cursor',
      offsets: [],
      repeatOffsets: [],
    };
    this.handleIconChange = this.handleIconChange.bind(this);
    this.handleRepeatOffsetsChange = this.handleRepeatOffsetsChange.bind(this);
    this.handleOffsetsChange = this.handleOffsetsChange.bind(this);
  }

  handleIconChange(event) {
    this.setState({
      sparePiece: event.target.value
    })
  };

  handleRepeatOffsetsChange(event) {
    // separate input into list of numbers separated by spaces and/or commas; e.g.,
    // '1 2 , -3,4' -> [ '1', '2', '-3', '4' ]
    const offsets = (event.target.value).split(/[\s,]+/);
    // remove everything from the list except for numbers between -16 and 16
    const filteredOffsets = offsets.filter(offset => offset && offset >= -16 && offset <= 16);
    this.setState({
      repeatOffsets: filteredOffsets
    })
  }

  handleOffsetsChange(event) {
    const offsets = (event.target.value).split(/[\s,]+/);
    const filteredOffsets = offsets.filter(offset => offset >= -16 && offset <= 16);
    this.setState({
      offsets: filteredOffsets
    })
  }

  render() {
    console.log(this.state);
    return (
      <div style={{textAlign: 'center'}}>
        <div id='board' style={{display: 'inline-block', position: 'relative', border: '0.15em dotted pink'}}>
          {/* render the board */}
          <div style={{display: 'inline-block'}}>
            {Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 0, false, false, this.state.editMode, this.state.sparePiece)}
          </div>

          {/* render spare pieces component that calls handleIconChange() when one of its icons is selected */}
          <SparePieces handleChange={this.handleIconChange} />
          <PieceCustomize
            onOffsetsChange={this.handleOffsetsChange}
            onRepeatOffsetsChange={this.handleRepeatOffsetsChange}
          />
          </div>
      </div>
    );
  }
}

export default AnalysisBoard;