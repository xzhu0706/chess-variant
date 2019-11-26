import React from 'react';

function GameData(props) {
  let game_state = `${props.turn === 'w' ? 'White' : 'Black'}'s turn`;
  if (props.gameResult === 'checkmate') {
    game_state = `${props.turn === 'w' ? 'Black' : 'White'} wins (checkmate)`;
  }
  else if (props.gameResult === 'extinction') {
    game_state = `${props.turn === 'w' ? 'Black' : 'White'} wins (extinction)`;
  }
  else if (props.gameResult === 'repetition') {
    game_state = 'Draw (three-fold repetition)';
  }
  else if (props.gameResult === 'stalemate') {
    game_state = `Draw (stalemate)`;
  }
  else if (props.gameResult === 'insufficient') {
    game_state = `Draw (insufficient material)`;
  }
  else if (props.gameResult === 'fifty') {
    game_state = `Draw (fifty-move rule)`;
  }
  const mystyle = {
    fontSize: "2em"
  };
  const history = props.history.map((move, index) => {
    return (
      <span>
        {index % 2 === 0 ? <span>{index/2 + 1}. </span> : ''}
				<span>{move} </span>
      </span>
    );
  });
  return (
    <div className="game-data">
      <div>FEN: {props.fen}</div>
      <div>PGN: {props.pgn}</div>
      <div style={mystyle}>STATE: {game_state}</div>
			<div className="moves">{history}</div>
    </div>
  );
}

export default GameData;
