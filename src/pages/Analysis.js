import React from 'react';
import Board from '../WithMoveValidation';

function Analysis(props) {
  return (
    <div style={{ padding: '1em', textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
        { props.location.state ? 
          Board(props.location.state.fen, 0, true, false, false, undefined, props.location.state.customPiece) :
          Board(undefined, 0, true, false, false, undefined)
        }
      </div>
    </div>
  );
}

export default Analysis;