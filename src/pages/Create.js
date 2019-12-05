import React from 'react';
import { Link } from 'react-router-dom';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import PieceCustomize from '../components/customization/PieceCustomize.js';
import './Create.css';

/* /create page that contains
(a) the board in edit mode,
(b) spare pieces that can be added to the board,
(c) customization,
*/

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      icon: 'cursor',
      offsets: [],
      repeatOffsets: []
    };
    this.handleIconChange = this.handleIconChange.bind(this);
    this.handleRepeatOffsetsChange = this.handleRepeatOffsetsChange.bind(this);
    this.handleOffsetsChange = this.handleOffsetsChange.bind(this);
  }

  handleIconChange(event) {
    this.setState({
      icon: event.target.value
    });
  };

  handleOffsetsChange(event) {
    // separate input into list of numbers (separation criterion: any number of spaces/commas/semicolons); e.g.,
    // '1 2 , -3,4' -> [ 1, 2, -3, 4 ]
    const offsets = (event.target.value).split(/[\s,;]+/).map(Number);
    // remove everything from the list except for numbers that are valid offsets
    const filtered = offsets.filter(offset => offset && offset >= -119 && offset <= 119 && offset !== 0);
    this.setState({
      offsets: filtered
    });
  }

  handleRepeatOffsetsChange(event) {
    const offsets = (event.target.value).split(/[\s,;]+/).map(Number);
    const filtered = offsets.filter(offset => offset && offset >= -119 && offset <= 119 && offset !== 0);
    this.setState({
      repeatOffsets: filtered
    });
  }

  customPiece() {
    return { 'c': { '0': this.state.offsets, '1': this.state.repeatOffsets } };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div id='board' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', }}>
          {/* render the board */}
          <div>
            {Board('rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1', 0, false, false, this.state.editMode, this.state.icon, this.customPiece())}
          </div>

          {/* render spare pieces component that calls handleIconChange() when one of its icons is selected */}
          <div>
            <div>
              Select one of the options below to edit the board.
            </div>
            <SparePieces handleChange={this.handleIconChange} />
            <PieceCustomize
              offsets={this.state.offsets}
              repeatOffsets={this.state.repeatOffsets}
              onChangeOffsets={this.handleOffsetsChange}
              onChangeRepeatOffsets={this.handleRepeatOffsetsChange}
            />
          </div>
          </div>
      </div>
    );
  }
}

export default Create;