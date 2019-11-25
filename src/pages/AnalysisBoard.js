import React from 'react';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import './AnalysisBoard.css';

class AnalysisBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sparePiece: '',
    };
    this.handlePieceChange = this.handlePieceChange.bind(this);
  }

  handlePieceChange(event) {
    this.setState({
      sparePiece: event.target.value
    });
  };

  render() {
    // 'k' will be the White king, i.e., the piece object is { piece: 'k' , color: 'w' }
    // 'K' will be the Black king, i.e., the piece object is { piece: 'k' , color: 'b' }
    const piece = this.state.sparePiece.toLowerCase(); 
    const color = this.state.sparePiece === this.state.sparePiece.toLowerCase() ? 'b' : 'w';
    const pieceObj = { piece, color };
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block'}}>
          <Board editMode={true} />
          <SparePieces handleChange={this.handlePieceChange} />
        </div>
      </div>
    );
  }
}

export default AnalysisBoard;