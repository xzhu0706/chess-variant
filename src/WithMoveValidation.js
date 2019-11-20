import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chess from 'chess.js';
import Chessboard from 'chessboardjsx';
// import rough from "roughjs"; // can give the squares a rough appearance
import { API, graphqlOperation } from 'aws-amplify';
//import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import GameData from './GameData.js';
import wn_test from "./wn.svg"; // testing the use of custom icons
import bn_test from "./bn.svg"
import './variant-style.css';


class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
    variant: 0,
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    pgn: "",
    squareStyles: {}, // custom square styles
    pieceSquare: "", // piece on the most recently selected square
    gameOver: false,
    gameResult: '', // checkmate, stalemate, insufficient material, ...
    turn: '',
  };

  componentDidMount() {
    console.log('component reload', this.props.fen, this.props.pgn, this.props.gameToken, this.props.turn)
    this.game = new Chess(this.props.fen || this.state.fen, this.props.variant);
    // initialize the internal game
    this.setState({
      variant: this.props.variant,
      fen: this.game.fen(),
      turn: this.game.turn(),
    });
    this.updateGameResult(); // in case the FEN string gives an ending position
  }

  componentWillReceiveProps(nextProps) {
    console.log('getting props', this.props.fen, this.props.pgn, this.props.gameToken, this.props.turn, this.game.fen());
    if (nextProps.fen !== this.props.fen) {
      this.setState({
        fen: nextProps.fen,
      })
      this.game = new Chess(nextProps.fen);
    }
    if (nextProps.pgn !== this.props.pgn) {
      this.setState({
        pgn: nextProps.pgn,
      });
    }
    if (nextProps.turn !== this.props.turn) {
      this.setState({
        turn: nextProps.turn,
      });
    }
  }

  // adjust board size according to window size
  calcWidth = (dimensions) => {
    let customWidth = Math.min(540/640 * dimensions.screenWidth, 540/640 * dimensions.screenHeight);
    return (dimensions.screenWidth < 640 || dimensions.screenHeight < 640) ? customWidth : 540;
  }

  // highlight hint squares
  highlightSquare = (hintSquares) => {
    const highlightStyles = [...hintSquares].reduce(
      (a, c) => ({
        ...a,
        ...{
          [c]: {
            background:
                'radial-gradient(circle, rgba(255, 120, 12, 67%), 50%, transparent 10%)',
            borderRadius: '50%',
          },
        },
      }),
      {},
    );
    // show hints
    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles },
    }));
  };

  updateGameResult() {
    if (this.game.game_over()) {
      let result = "fifty"; // fifty move rule
      if (this.game.in_checkmate()) {
        result = "checkmate";
      }
      else if (this.state.variant === 3 && this.game.extinguished()) {
        result = 'extinction';
      }
      else if (this.game.in_stalemate()) {
        result = "stalemate";
      }
      else if (this.game.insufficient_material()) {
        result = "insufficient";
      }
      else if (this.game.in_threefold_repetition()) {
        result = "repetition";
      }
      this.setState({
        gameOver: true,
        gameResult: result
      });
    }
    /* (we will pass the value of this.state.gameResult to GameData) */
  }

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

    // highlight the destination square of every possible move, moves[i].to
    const hintSquares = moves.map(move => move.to);
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

    // legal move, so update the game state
    this.setState({
      fen: this.game.fen(),
      pgn: this.game.pgn(),
      pieceSquare: '',
      turn: this.game.turn(),
    });

    // end the game if necessary
    this.updateGameResult();

    // call API
    if (this.props.gameToken) {
      console.log('update db');
      this.updateDatabase();
    }
  };

  updateDatabase = async () => {
    // TODO
    const data = {
      id: this.props.gameToken,
      fen: this.game.fen(),
      pgn: this.game.pgn(),
      turn: this.game.turn(),
      // game result?
    };
    const updateGame = await API.graphql(graphqlOperation(mutations.updateGame, { input: data }));
    console.log('update db', updateGame);
  }

  // When right clicking, we preserve the old squareStyles (we merely append the new style).
  // This will allow the user to have multiple squares be highlighted simultaneously,
  // for whatever reason (annotation?)
  onSquareRightClick = (square) => this.setState(({ squareStyles }) => ({
    squareStyles: { ...squareStyles, [square]: { backgroundColor: '#e86c65' } },
  }));

  render() {
    console.log(this.state);
    const { fen, pgn, turn, gameResult, squareStyles } = this.state;
    return this.props.children({
      squareStyles,
      fen,
      pgn,
      gameResult,
      turn,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
      calcWidth: this.calcWidth
    });
  }
}

export default function WithMoveValidation(gameToken='', turn='w', pgn='', start_fen='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', variant=0, showData=true, smallBoard=false) {
  console.log('func reload', start_fen, pgn, gameToken, turn)
  let boardId = variant === 2 && "grid-board"; // if variant isn't grid chess, boardId will be set to false
  return (
    <div>
      <HumanVsHuman fen={start_fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'} variant={variant} pgn={pgn} turn={turn} gameToken={gameToken}>
        { /* HumanVsHuman calls the following function as this.props.children() in its render() method */ }
        {({
          squareStyles,
          fen,
          pgn,
          gameResult,
          turn,
          onSquareClick,
          onSquareRightClick,
          calcWidth
        }) => {
          // redefine calcWidth() if smallBoard arg is true
          if (smallBoard) {
            calcWidth = (dimensions) => {
              let customWidth = Math.min(384/460 * dimensions.screenWidth, 384/460 * dimensions.screenHeight);
              return (dimensions.screenWidth < 460 || dimensions.screenHeight < 460) ? customWidth : 384;
            }
          }
          return (
          <div className="d-flex p-1">
            {
              showData ? (
              <div className="col-lg-5">
                <GameData fen={fen} pgn={pgn} turn={turn} gameResult={gameResult} />
              </div>
              ) :
              null
            }
            <div id={boardId}>
              <Chessboard
                id="humanVsHuman"
                position={fen}
                boardStyle={{
                  borderRadius: '5px',
                  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5)',
                }}
                pieces={{
                  wN: ({ squareWidth }) => (
                    <img
                      style={{
                        width: squareWidth,
                        height: squareWidth,
                      }}
                      src={wn_test}
                      alt="wn_test"
                    />
                  ),
                  bN: ({ squareWidth }) => (
                    <img
                      style={{
                        width: squareWidth,
                        height: squareWidth,
                      }}
                      src={bn_test}
                      alt="bn_test"
                    />
                  ),
                }}
                lightSquareStyle={{ backgroundColor: '#ffffff' }}
                darkSquareStyle={{ backgroundColor: '#65cae8' }}
                squareStyles={squareStyles}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
                calcWidth={calcWidth}
                draggable={false}
              />
            </div>
          </div>);
        }}
      </HumanVsHuman>
    </div>
  );
}
