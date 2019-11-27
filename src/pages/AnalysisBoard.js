import React from 'react';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import FenInput from '../components/customization/FenInput.js';
import './AnalysisBoard.css';

class AnalysisBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      sparePiece: 'cursor',
      fen: '',
    };
    this.handleIconChange = this.handleIconChange.bind(this);
  }

  handleIconChange(event) {
    this.setState({
      sparePiece: event.target.value
    })
  };

  handleFenChange(event) {
    this.setState({
      fen: event.target.value
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block'}}>
          {/* render the board */}
          {Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 0, false, false, this.state.editMode, this.state.sparePiece)}
        </div>
        <div>
          <FenInput />
        </div>
        <div>
            {/* render spare pieces component that calls handleIconChange() when one of its icons is selected */}
            <SparePieces handleChange={this.handleIconChange} />
        </div>
      </div>
    );
  }
}

export default AnalysisBoard;