import React from 'react';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import './AnalysisBoard.css';

class AnalysisBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      sparePiece: 'cursor',
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
        <div style={{display: 'inline-block'}}>
          {/* render the board in edit or non-edit mode with knowledge of the currently selected spare piece  */}
          {Board(undefined, 0, true, false, this.state.editMode, this.state.sparePiece)}
        </div>
        <div>
            {/* render the spare pieces module that will update this.state when a spare piece is selected */}
            <SparePieces handleChange={this.handleIconChange} />
        </div>
      </div>
    );
  }
}

export default AnalysisBoard;