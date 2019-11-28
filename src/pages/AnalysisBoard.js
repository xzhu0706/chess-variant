import React from 'react';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import './AnalysisBoard.css';

class AnalysisBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      sparePiece: 'cursor'
    };
    this.handleIconChange = this.handleIconChange.bind(this);
  }

  handleIconChange(event) {
    this.setState({
      sparePiece: event.target.value
    })
  };

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div id='board' style={{display: 'inline-block', position: 'relative', border: '0.15em dotted pink'}}>
          {/* render the board */}
          <div style={{display: 'inline-block'}}>
            {Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 0, false, false, this.state.editMode, this.state.sparePiece)}
          </div>

          {/* render spare pieces component that calls handleIconChange() when one of its icons is selected */}
          <SparePieces handleChange={this.handleIconChange} />
          </div>
        <div>
          {/* <form onSubmit={this.handleSubmit}>
            <label htmlFor="customize">Enter move offsets</label>
            <input id="customize" name="customize" type="text" />
            <Button type='submit'>Play</Button>
          </form> */}
        </div>
      </div>
    );
  }
}

export default AnalysisBoard;