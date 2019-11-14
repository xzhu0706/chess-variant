import React from 'react';

function GameData(props) {
  const turn = props.turn === 'w' ? 'White' : 'Black';
  let state_msg = `${turn}'s turn`;
  if (props.game_state === 'repetition') {
    state_msg = 'Draw (three-fold repetition)';
  } else if (props.game_state === 'stalemate') {
    state_msg = `${props.turn === 'w' ? 'White' : 'Black'} wins`;
  }
  const mystyle = {
    fontSize: '2em',
  };
  return (
    <div>
      <div>
FEN:
        {props.fen}
      </div>
      <div>
PGN:
        {props.pgn}
      </div>
      <div style={mystyle}>{state_msg}</div>
    </div>
  );
}

export default GameData;
