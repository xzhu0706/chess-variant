import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chess from 'chess.js';
import Chessboard from 'chessboardjsx';
import Button from '@material-ui/core/Button';
import GameData from './components/GameData';
import CustomPlayOption from './components/customization/CustomPlayOption';
import wm from './icons/pieces/fairy/wk_180.svg'; // "mann" (upside-down king)
import bm from './icons/pieces/fairy/bk_180.svg';
import wf from './icons/pieces/fairy/wb_180.svg'; // "ferz" (upside-down bishop)
import bf from './icons/pieces/fairy/bb_180.svg';
import wd from './icons/pieces/fairy/wn_180.svg'; // "night rider" (upside-down knight)
import bd from './icons/pieces/fairy/bn_180.svg';
import we from './icons/pieces/fairy/we.svg'; // "empress" (knight/rook combo)
import be from './icons/pieces/fairy/be.svg'; // "empress"
import ws from './icons/pieces/fairy/ws.svg'; // "princess" (knight/bishop combo)
import bs from './icons/pieces/fairy/bs.svg'; // "princess"
import wj from './icons/white_joker.svg'; //
import bj from './icons/black_joker.svg';
import './variant-style.css';

class HumanVsHuman extends Component {
  constructor(props) {
    super(props);
    const { fen, variant, customPiece } = this.props;
    this.state = {
      fen: fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      history: [],
      reverseHistory: [],
      squareStyles: {}, // custom square styles
      fromSquare: '', // most recently clicked square (empty if a move was just made)
      turn: '',
      orientation: 'white',
      gameOver: false,
      gameResult: '', // checkmate, stalemate, insufficient material, ...
    };

    this.game = new Chess(
      fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      variant,
      customPiece || { c: { 0: [], 1: [] } },
    );
  }

  componentDidMount() {
    this.setState({
      turn: this.game.turn(),
    });
    this.updateGameResult(); // in case the FEN string gives an ending position
  }

  componentDidUpdate(prevProps) {
    const { editMode, sparePiece } = this.props;
    // get rid of old square-selection information if the user leaves cursor mode
    if (editMode && sparePiece !== 'cursor' && prevProps.sparePiece === 'cursor') {
      this.setState({
        squareStyles: {},
        fromSquare: '',
      });
    }
    // not totally necessary, but if we didn't do this, then
    // (a) one square would still be highlighted after the user de-selects the cursor
    // (b) the fromSquare would still be set, so the user could move the selected piece
    // after re-entering cursor mode
  }

  flipOrientation = () => {
    const { orientation } = this.state;
    this.setState({
      orientation: orientation === 'white' ? 'black' : 'white',
    });
  }

  clearBoard = () => {
    this.game.load('4k3/8/8/8/8/8/8/4K3 w - - 0 1');
    this.setState({
      fen: this.game.fen(),
      fromSquare: '',
      squareStyles: {},
    });
    const { handleFenChange } = this.props;
    if (handleFenChange) {
      handleFenChange(this.game.fen()); // in the /create page, update this.state.startFen
    }
  }

  resetBoard = () => {
    this.game.reset();
    this.setState({
      fen: this.game.fen(),
      fromSquare: '',
      squareStyles: {},
    });
    const { handleFenChange } = this.props;
    if (handleFenChange) {
      handleFenChange(this.game.fen()); // in the /create page, update this.state.startFen
    }
  }

  prevMove = () => {
    if (this.game.history().length > 0) {
      const { reverseHistory } = this.state;
      const newReverseHistory = [...reverseHistory, this.game.history().pop()];
      this.game.undo();
      this.setState({
        fen: this.game.fen(),
        reverseHistory: newReverseHistory,
      });
    }
  }

  nextMove = () => {
    const { reverseHistory } = this.state;
    const newReverseHistory = [...reverseHistory];
    if (newReverseHistory.length > 0) {
      const move = newReverseHistory.pop();
      this.game.move(move);
      this.setState({
        fen: this.game.fen(),
        reverseHistory: newReverseHistory,
      });
    }
  }

  // adjust board size according to window size
  calcWidth = (dimensions) => {
    let customWidth = Math.min(540 / 640 * dimensions.screenWidth, 600 / 640 * dimensions.screenHeight);
    if (customWidth < 300) customWidth = 300;
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
                'radial-gradient(circle, rgba(255, 120, 12, 0.67), 50%, transparent 10%)',
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

  onSquareClick = (square) => {
    const { editMode, sparePiece, handleFenChange } = this.props;
    const { gameOver, fromSquare } = this.state;
    if (!editMode) {
    // disable user input if game is over
      if (gameOver) return;

      // highlight the square you just clicked
      this.setState(() => ({
        squareStyles: { [square]: { backgroundColor: '#38f' } },
        fromSquare: square,
      }));

      // get list of possible moves for the piece on this square
      // (returns empty array if there are no possible moves or there is no piece)
      const moves = this.game.moves({
        square,
        verbose: true,
      });

      // highlight the destination square of every possible move, moves[i].to
      const hintSquares = moves.map((move) => move.to);
      this.highlightSquare(hintSquares);

      // process the case where the user has registered a move by clicking
      const move = this.game.move({
        from: fromSquare,
        to: square,
        promotion: 'q', // always promote to a queen for example simplicity
        // fix this so the user can choose what to promote to
      });

      // illegal move
      if (move === null) return;

      // legal move, so update the game state
      this.setState({
        fen: this.game.fen(),
        history: this.game.history(),
        fromSquare: '',
        turn: this.game.turn(),
      });

      // end the game if necessary
      this.updateGameResult();
    } else if (sparePiece !== 'cursor') {
      // if the selected square is not empty
      if (this.game.get(square)) {
        if (sparePiece === 'trash') { // if trash icon is selected, delete piece on selected square
          this.game.remove(square);
          this.setState({
            fen: this.game.fen(),
          });
          if (handleFenChange) {
            handleFenChange(this.game.fen()); // in the /create page, update this.state.startFen
          }
        }
      } else { // place the selected spare piece on the selected square if the selected square is empty
        const type = sparePiece.toLowerCase();
        const color = sparePiece === sparePiece.toLowerCase() ? 'b' : 'w';
        this.game.put({ type, color }, square);
        this.setState({
          fen: this.game.fen(),
        });
        if (handleFenChange) {
          handleFenChange(this.game.fen()); // in the /create page, update this.state.startFen
        }
      }
    } else {
      // do nothing if the person clicked on the same square twice
      if (fromSquare === square) {
        return;
      }

      // highlight clicked square, and update the from square
      this.setState({
        squareStyles: { [square]: { backgroundColor: '#ebae34' } },
        fromSquare: square,
      });

      // get just selected piece if it exists
      const piece = this.game.get(fromSquare);

      if (piece === null) return;

      // displace the selected piece on the board
      this.game.remove(fromSquare);
      this.game.put(piece, square);

      // update the fen, and empty out the from square
      this.setState({
        fen: this.game.fen(),
        fromSquare: '',
      });

      if (handleFenChange) {
        handleFenChange(this.game.fen()); // in the /create page, update this.state.startFen
      }
    }
  };

  // When right clicking, we preserve the old squareStyles (we merely append the new style).
  // This will allow the user to have multiple squares be highlighted simultaneously,
  // for whatever reason (annotation?)
  onSquareRightClick = (square) => {
    const { editMode } = this.props;
    if (!editMode) {
      this.setState(({ squareStyles }) => ({
        squareStyles: { ...squareStyles, [square]: { backgroundColor: '#e86c65' } },
      }));
    }
  };

  updateGameResult() {
    if (this.game.game_over()) {
      let result;
      const { variant } = this.props;
      if (this.game.in_checkmate()) {
        result = 'checkmate';
      } else if (variant === 3 && this.game.extinguished()) {
        result = 'extinction';
      } else if (this.game.in_stalemate()) {
        result = 'stalemate';
      } else if (this.game.insufficient_material()) {
        result = 'insufficient';
      } else if (this.game.in_threefold_repetition()) {
        result = 'repetition';
      } else {
        result = 'fifty';
      }
      this.setState({
        gameOver: true,
        gameResult: result,
      });
    }
    /* (we will pass the value of this.state.gameResult to GameData) */
  }

  render() {
    const {
      fen, history, reverseHistory, turn, gameResult, squareStyles, orientation,
    } = this.state;
    const { children } = this.props;
    return children({
      squareStyles,
      fen,
      history,
      reverseHistory,
      turn,
      gameResult,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
      calcWidth: this.calcWidth,
      flipOrientation: this.flipOrientation,
      resetBoard: this.resetBoard,
      clearBoard: this.clearBoard,
      prevMove: this.prevMove,
      nextMove: this.nextMove,
      orientation,
    });
  }
}

export default function WithMoveValidation(
  startFen,
  variant = 0,
  showData = true,
  smallBoard = false,
  editMode = false,
  sparePiece,
  customPiece,
  handleFenChange,
) {
  const boardId = variant === 2 ? 'grid-board' : 'false'; // if variant isn't grid chess, boardId will be set to false
  return (
    <div style={smallBoard ? { maxWidth: '384px' } : { maxWidth: '540px' }}>
      <HumanVsHuman
        fen={startFen}
        variant={variant}
        editMode={editMode}
        sparePiece={sparePiece}
        customPiece={customPiece}
        handleFenChange={handleFenChange}
      >
        { /* HumanVsHuman calls the following function as this.props.children() in its render() method */ }
        {({
          squareStyles,
          fen,
          history,
          reverseHistory,
          turn,
          gameResult,
          onSquareClick,
          onSquareRightClick,
          calcWidth,
          flipOrientation,
          resetBoard,
          clearBoard,
          prevMove,
          nextMove,
          orientation,
        }) => {
          // redefine calcWidth() if smallBoard arg is true
          if (smallBoard) {
            calcWidth = (dimensions) => {
              let customWidth = Math.min(384 / 460 * dimensions.screenWidth, 430 / 460 * dimensions.screenHeight);
              if (customWidth < 215) customWidth = 215;
              return (dimensions.screenWidth < 460 || dimensions.screenHeight < 460) ? customWidth : 384;
            };
          }

          let customPieces = {
            wM: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={wm}
                alt="white mann"
              />
            ),
            bM: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={bm}
                alt="black mann"
              />
            ),

            wD: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={wd}
                alt="white nightrider"
              />
            ),
            bD: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={bd}
                alt="black nightrider"
              />
            ),
            wF: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={wf}
                alt="white ferz"
              />
            ),
            bF: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={bf}
                alt="black ferz"
              />
            ),
            wE: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={we}
                alt="white empress"
              />
            ),
            bE: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={be}
                alt="black empress"
              />
            ),
            wS: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={ws}
                alt="white princess"
              />
            ),
            bS: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={bs}
                alt="black princess"
              />
            ),

            wC: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={wj}
                alt="white joker"
              />
            ),
            bC: ({ squareWidth }) => (
              <img
                style={{
                  width: squareWidth,
                  height: squareWidth,
                }}
                src={bj}
                alt="black joker"
              />
            ),
          };

          // for antichess, replace king with flipped king
          if (variant === 1) {
            customPieces = {
              ...customPieces,
              ...{
                wK: ({ squareWidth }) => (
                  <img
                    style={{
                      width: squareWidth,
                      height: squareWidth,
                    }}
                    src={wm}
                    alt="white mann"
                  />
                ),
                bK: ({ squareWidth }) => (
                  <img
                    style={{
                      width: squareWidth,
                      height: squareWidth,
                    }}
                    src={bm}
                    alt="black mann"
                  />
                ),
              },
            };
          }

          const gameData = showData ? (
            <div className="p-1">
              <GameData
                variant={variant}
                history={history}
                turn={turn}
                gameResult={gameResult}
                prevMove={prevMove}
                nextMove={nextMove}
                currentMove={history.length - reverseHistory.length}
              />
            </div>
          )
            : null;

          return (
            // <div className="d-flex flex-column">
            <div>
              { editMode ? <CustomPlayOption fen={fen} customPiece={customPiece} /> : null }
              <div id={boardId} style={{ display: 'inline-block' }}>
                <Chessboard
                  position={fen}
                  boardStyle={{
                    borderRadius: '5px',
                    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5)',
                  }}
                  pieces={customPieces}
                  lightSquareStyle={{ backgroundColor: '#f7f7f7' }}
                  darkSquareStyle={{ backgroundColor: '#65cae8' }}
                  squareStyles={squareStyles}
                  onSquareClick={onSquareClick}
                  onSquareRightClick={onSquareRightClick}
                  calcWidth={calcWidth}
                  draggable={false}
                  orientation={orientation}
                />
              </div>
              <div style={{ textAlign: 'center', margin: '0.4em' }}>
                <Button size="small" variant="outlined" onClick={flipOrientation}>Flip board</Button>
                {editMode ? <Button size="small" variant="outlined" onClick={resetBoard}>Reset to start</Button> : null}
                {editMode ? <Button size="small" variant="outlined" onClick={clearBoard}>Clear board</Button> : null}
              </div>
              { gameData }
            </div>
          );
        }}
      </HumanVsHuman>
    </div>
  );
}

HumanVsHuman.propTypes = { children: PropTypes.func };
