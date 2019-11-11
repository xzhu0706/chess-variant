<<<<<<< HEAD
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chess from 'chess.js';
import Chessboard from 'chessboardjsx';
// import rough from "roughjs"; // can give the squares a rough appearance
import bk_test from './bk.svg'; // testing the use of custom icons
=======
import React, { Component } from "react";
import PropTypes from "prop-types";
import Chess from  "chess.js";
import Chessboard from "chessboardjsx";
import rough from "roughjs"; // can give the squares a rough appearance
import GameData from './GameData.js';
import wn_test from "./wn.svg"; // testing the use of custom icons
import bn_test from "./bn.svg"; // testing the use of custom icons
>>>>>>> upstream/master

class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
<<<<<<< HEAD
    fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
    dropSquareStyle: {}, // square styles for active drop square
    squareStyles: {}, // custom square styles
    pieceSquare: '', // piece on the most recently selected square
    square: '', // currently clicked square
=======
    fen: "8/p1p5/2B3n1/8/8/8/P1PQ1KPP/R5NR b - - 0 15",
    pgn: "",
    dropSquareStyle: {}, // square styles for active drop square
    squareStyles: {}, // custom square styles
    pieceSquare: "", // piece on the most recently selected square
    square: "", // currently clicked square
    gameOver: false,
    gameResult: "", // checkmate, stalemate, insufficient material, ...
    turn: ""
>>>>>>> upstream/master
  };

  updateGameResult() {
    if (this.game.game_over()) {
      this.setState({
        gameOver: true,
        gameResult: this.game.in_stalemate() ? "stalemate" : "repetition"
      });
    }
  }

  componentDidMount() {
    this.game = new Chess(this.state.fen); // initialize the game
    this.setState({
      pgn: this.game.pgn(),
      turn: this.game.turn()
    });
    this.updateGameResult(); // in case the FEN string gives an ending position
  }

  // highlight hint squares
  highlightSquare = (hintSquares) => {
    const highlightStyles = [...hintSquares].reduce(
<<<<<<< HEAD
      (a, c) => ({
        ...a,
        ...{
          [c]: {
            background:
                'radial-gradient(circle, rgba(255, 120, 12, 0.57), 50%, transparent 10%)',
            borderRadius: '50%',
          },
        },
      }),
      {},
    );
    // console.log(highlightStyles);
=======
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, rgba(255, 120, 12, 67%), 50%, transparent 10%)",
              borderRadius: "50%",
            }
          }
        };
      },
      {}
    );
>>>>>>> upstream/master
    // show hints
    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles },
    }));
  };

  terminateGame = () => {
    this.setState({
      gameOver: true
    });
    console.log("game over!");
    
    if (this.game.in_threefold_repetition()) {
      console.log("Draw by three-fold repetition");
    }
    else {
      console.log(`${this.game.turn() === 'w' ? 'White' : 'Black'} wins by stalemate`);
    }
  }

  onDrop = ({ sourceSquare, targetSquare }) => {
    if (this.state.gameOver) return;

    // see if the move is legal
    const move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
      // fix this so the user can choose what to promote to
    });

    // illegal move
    if (move === null) return;

    // legal move, so update the fen
    this.setState(({ pieceSquare }) => ({
      fen: this.game.fen(),
<<<<<<< HEAD
      pieceSquare: '',
=======
      pgn: this.game.pgn(),
      pieceSquare: "",
      turn: this.game.turn()
>>>>>>> upstream/master
    }));

    // end the game if the game state is finished
    if (this.game.game_over()) {
      this.terminateGame();
    }
  };

  // onDragOverSquare = square => {
  //   this.setState({
  //     dropSquareStyle:{ backgroundColor: "#38f" }
  //   });
  // };

  onSquareClick = (square) => {
    if (this.state.gameOver) return;

    // highlight the square you just clicked
    this.setState(() => ({
      squareStyles: { [square]: { backgroundColor: '#38f' } },
      pieceSquare: square,
    }));
    // get list of possible moves for the piece on this square
    // (returns empty array if there are no possible moves or there is no piece)
    const moves = this.game.moves({
      square,
      verbose: true,
    });

<<<<<<< HEAD
    // we only need the destination of each possible move, which is moves[i].to
    const hintSquares = [];
    for (let i = 0; i < moves.length; i++) {
      hintSquares.push(moves[i].to);
    }

    // highlight the destination square of each possible move
=======
    // highlight the to square of every possible move, moves[i].to
    const hintSquares = moves.map(move => move.to);
>>>>>>> upstream/master
    this.highlightSquare(hintSquares);

    // process the case where the user has registered a move by clicking
    const move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: 'q', // always promote to a queen for example simplicity
      // fix this so the user can choose what to promote to
    });

    // illegal move
    if (move === null) return;

    // legal move, so update the fen
    this.setState({
      fen: this.game.fen(),
<<<<<<< HEAD
      pieceSquare: '',
=======
      pgn: this.game.pgn(),
      pieceSquare: "",
      turn: this.game.turn()
>>>>>>> upstream/master
    });

    // end the game if the game state is finished
    if (this.game.game_over()) {
      this.terminateGame();
    }
  };

  // When right clicking, we preserve the old squareStyles (we merely append the new style).
  // This will allow the user to have multiple squares be highlighted simultaneously,
  // for whatever reason (annotation?)
  onSquareRightClick = (square) => this.setState(({ squareStyles }) => ({
    squareStyles: { ...squareStyles, [square]: { backgroundColor: '#e86c65' } },
  }));

  render() {
    const { fen, pgn, turn, dropSquareStyle, squareStyles } = this.state;
    let game_state = '';
    if (this.state.gameOver === true) {
      if (this.game.in_stalemate()) {
        game_state = 'stalemate';
      } else {
        game_state = 'repetition';
      }
    }
    return this.props.children({
      squareStyles,
      fen,
      pgn,
      game_state,
      turn,
      // onMouseOverSquare: this.onMouseOverSquare,
      // onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      // onDragOverSquare: this.onDragOverSquare,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
    });
  }
}

export default function WithMoveValidation() {
  return (
    <div>
      <HumanVsHuman>
        {({
          squareStyles,
          fen,
          pgn,
          game_state,
          turn,
          onDrop,
          dropSquareStyle,
          // onDragOverSquare,
          onSquareClick,
          onSquareRightClick,
        }) => (
<<<<<<< HEAD
          <div>
            <Chessboard
              id="humanVsHuman"
              width={540}
              position={position}
              onDrop={onDrop}
              boardStyle={{
                borderRadius: '5px',
                boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5)',
              }}
              pieces={{
                bK: ({ squareWidth }) => (
                  <img
                    style={{
                      width: squareWidth,
                      height: squareWidth,
                    }}
                    src={bk_test}
                    alt="bk_test"
                  />
                ),
              }}
              lightSquareStyle={{ backgroundColor: '#ffffff' }}
              darkSquareStyle={{ backgroundColor: '#65cae8' }}
              squareStyles={squareStyles}
              dropSquareStyle={dropSquareStyle}
              // onDragOverSquare={onDragOverSquare}
              onSquareClick={onSquareClick}
              onSquareRightClick={onSquareRightClick}
              draggable
            />
            <div>
fen:
              {position}
            </div>
            {' '}
            { /* should this be a child component? */ }
=======
          <div className="row">
            <div className="col-lg-5">
              <GameData fen={fen} pgn={pgn} turn={turn} game_state={game_state} />
            </div>
            <div className="col-lg-7">
              <Chessboard
                id="humanVsHuman"
                width={540}
                roughSquare={roughSquare}
                position={fen}
                onDrop={onDrop}
                boardStyle={{
                  borderRadius: "5px",
                  boxShadow: `0 2px 3px rgba(0, 0, 0, 0.5)`
                }}
                pieces={{
                  wN: ({ squareWidth }) => (
                    <img
                      style={{
                        width: squareWidth,
                        height: squareWidth
                      }}
                      src={wn_test}
                      alt={"wn_test"}
                    />
                  ),
                  bN: ({ squareWidth }) => (
                    <img
                      style={{
                        width: squareWidth,
                        height: squareWidth
                      }}
                      src={bn_test}
                      alt={"bn_test"}
                    />
                  )
                }}
                lightSquareStyle={{ backgroundColor: "#ffffff" }}
                darkSquareStyle={{ backgroundColor: "#65cae8" }}      
                squareStyles={squareStyles}
                dropSquareStyle={dropSquareStyle}
                // onDragOverSquare={onDragOverSquare}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
                draggable={true}
              />
            </div>
>>>>>>> upstream/master
          </div>
        )}
      </HumanVsHuman>
    </div>
  );
}

/* give squares a rough appearance using roughjs
const roughSquare = ({ squareElement, squareWidth }) => {
  let rc = rough.svg(squareElement);
  const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.5,
    bowing: 2.5,
    strokeWidth: 0.5,
    //fill: "AliceBlue",
    //fillStyle: "cross-hatch" // why doesn't this work? (doesn't create cross hatches)?
  });
  squareElement.appendChild(chessSquare);
}; */
