import React from 'react';
import './GameData.css'

function GameData({ variant, turn, gameResult, history, prevMove, nextMove, winner, currentMove }) {
  let game_state = `${turn === 'w' ? 'White' : 'Black'}'s turn`;

  if (gameResult === 'checkmate') {
    if (!winner) {
      winner = turn === 'w' ? 'Black' : 'White' // the person whose turn it is LOSES
    }
    game_state = `${winner} wins (checkmate)`;
  }
  else if (gameResult === 'extinction') {
    if (!winner) {
      winner = turn === 'w' ? 'Black' : 'White'
    }
    game_state = `${winner} wins (extinction)`;
  }
  else if (gameResult === 'repetition') {
    game_state = 'Draw (three-fold repetition)';
  }
  else if (gameResult === 'stalemate') {
    if (variant === 1) { // antichess
      if (!winner) {
        winner = turn === 'w' ? 'White' : 'Black' // the person whose turn it is WINS
      }
      game_state = `${winner} wins (antichess stalemate)`
    }
    else {
      game_state = `Draw (stalemate)`;
    }
  }
  else if (gameResult === 'insufficient') {
    game_state = `Draw (insufficient material)`;
  }
  else if (gameResult === 'fifty') {
    game_state = `Draw (fifty-move rule)`;
  }
  const mystyle = {
    fontSize: "1.4em",
    textAlign: "center"
  };
  const hightlightMoveStyle = {
    backgroundColor: 'yellow',
  }
  let moves;
  if (history) {
    moves = history.map((move, index) => {
      return (
        <span key={index}>
          {index % 2 === 0 ? <span>{index/2 + 1}.&nbsp;</span> : ''}
          <span style={currentMove - 1 === index ? hightlightMoveStyle : null}>
            {move}
            &nbsp;
          </span>
        </span>
      );
    });
  }
  return (
    <div className="game-data">
      <div style={mystyle}>{game_state}</div>
      <div className="moves">{moves}</div>
      { gameResult && (
        <div className="text-center">
          <button onClick={prevMove}> prev </button>
          <button onClick={nextMove}> next </button>
        </div>
      )}
    </div>
  );
}

export default GameData;
