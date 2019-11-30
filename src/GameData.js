import React from 'react';
import './GameData.css'

function GameData({ turn, gameResult, history, prevMove, nextMove, winner, currentMove }) {
  let game_state = `${turn === 'w' ? 'White' : 'Black'}'s turn`;
  if (gameResult === 'checkmate') {
    game_state = `${winner} wins (checkmate)`;
  }
  else if (gameResult === 'extinction') {
    game_state = `${winner} wins (extinction)`;
  }
  else if (gameResult === 'repetition') {
    game_state = 'Draw (three-fold repetition)';
  }
  else if (gameResult === 'stalemate') {
    game_state = `Draw (stalemate)`;
  }
  else if (gameResult === 'insufficient') {
    game_state = `Draw (insufficient material)`;
  }
  else if (gameResult === 'fifty') {
    game_state = `Draw (fifty-move rule)`;
  }
  const mystyle = {
    fontSize: "1.4em"
  };
  const hightlightMoveStyle = {
    backgroundColor: 'yellow',
  }
  let moves;
  if (history) {
    moves = history.map((move, index) => {
      return (
        <span>
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
