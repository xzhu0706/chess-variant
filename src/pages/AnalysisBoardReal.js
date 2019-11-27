import React from 'react';
import Board from '../WithMoveValidation';

function AnalysisBoardReal(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
      {Board(props.location.state.fen, 0, false, false)}
      </div>
    </div>
  );
}

export default AnalysisBoardReal;