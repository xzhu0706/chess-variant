import React from 'react';
import Board from '../WithMoveValidation';

function AnalysisBoard() {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
        <Board />
      </div>
    </div>
  );
}

export default AnalysisBoard;