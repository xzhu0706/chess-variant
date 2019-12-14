import React from 'react';
import Board from '../WithMoveValidation';

function Analysis(props) {
  const { location } = props;
  return (
    <div style={{ padding: '1em', textAlign: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        { location.state
          ? Board(location.state.fen, 0, true, false, false, undefined, location.state.customPiece)
          : Board(undefined, 0, true, false, false, undefined)}
      </div>
    </div>
  );
}

export default Analysis;
