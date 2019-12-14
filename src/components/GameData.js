/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
import React from 'react';
import './GameData.css';

function GameData({
  variant, turn, gameResult, history, prevMove, nextMove, winner, currentMove,
}) {
  let gameState = '';
  if (!gameResult) {
    gameState = `${turn === 'w' ? 'White' : 'Black'}'s turn`;
  } else if (gameResult === 'checkmate') {
    if (!winner) {
      winner = turn === 'w' ? 'Black' : 'White'; // the person whose turn it is LOSES
    }
    gameState = `${winner} wins (checkmate)`;
  } else if (gameResult === 'extinction') {
    if (!winner) {
      winner = turn === 'w' ? 'Black' : 'White';
    }
    gameState = `${winner} wins (extinction)`;
  } else if (gameResult === 'repetition') {
    gameState = 'Draw (three-fold repetition)';
  } else if (gameResult === 'stalemate') {
    if (variant === 1) { // antichess
      if (!winner) {
        winner = turn === 'w' ? 'White' : 'Black'; // the person whose turn it is WINS
      }
      gameState = `${winner} wins (antichess stalemate)`;
    } else {
      gameState = 'Draw (stalemate)';
    }
  } else if (gameResult === 'insufficient') {
    gameState = 'Draw (insufficient material)';
  } else if (gameResult === 'fifty') {
    gameState = 'Draw (fifty-move rule)';
  } else {
    gameState = gameResult;
  }
  const mystyle = {
    fontSize: '1.4em',
    textAlign: 'center',
  };
  const hightlightMoveStyle = {
    backgroundColor: 'yellow',
  };
  let moves;
  if (history) {
    moves = history.map((move, index) => (
      <span key={index}>
        {index % 2 === 0 ? (
          <span>
            {index / 2 + 1}
.&nbsp;
          </span>
        ) : ''}
        <span style={currentMove - 1 === index ? hightlightMoveStyle : null}>
          {move}
            &nbsp;
        </span>
      </span>
    ));
  }
  return (
    <div className="game-data">
      <div style={mystyle}>{gameState}</div>
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
