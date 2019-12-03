import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import * as Games from '../Constants/GameComponentConstants';
import * as Colors from '../Constants/Colors';
import '../variant-style.css';
import './Game.css';
import Clock from '../components/Clock';
// import Clock from '../components/Clock';
import GameData from '../GameData';
import GameInfo from '../components/GameInfo';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
// import { Launcher } from 'react-chat-window'


const YOUR_TURN_MESSAGE = 'It\'s your turn!';

class Game extends Component {
  clockRefWhite = null;

  clockRefBlack = null;

  constructor(props) {
    super(props);
    this.state = {
      fen: '',
      timeW: 0,
      timeB: 0,
      squareStyles: {},
      yourTurn: false,
      showGameResignationDialog: false,
      history: [],
      messageList: [],
      gameOver: false,
      gameResult: '',
      winner: '',
      reverseHistory: [],
      turn: '',
    };
    this.game = null;
    this.opponent = null; // the opponent. null if user created or joined game anonymously
    this.gameId = null;
    this.orientation = '';
    this.gameUpdateSubscription = null;
    this.moveFrom = null;
    this.gameInfo = null;
    this.boardId = '';
    this.isViewer = false;
    this.setClockRefWhite = this.setClockRefWhite.bind(this);
    this.startWhite = this.startWhite.bind(this);
    this.pauseWhite = this.pauseWhite.bind(this);
    this.setClockRefBlack = this.setClockRefBlack.bind(this);
    this.startBlack = this.startBlack.bind(this);
    this.pauseBlack = this.pauseBlack.bind(this);
  }

  async componentDidMount() {
    const gameId = this.props.match.params.id;
    const queryResult = await API.graphql(graphqlOperation(queries.getGame, { id: gameId }));
    this.gameInfo = queryResult.data.getGame;
    if (this.gameInfo.history) {
      console.log('getting history from db', this.gameInfo);
      this.setState({
        history: [...this.gameInfo.history],
        gameOver: !!this.gameInfo.result,
        gameResult: this.gameInfo.result,
        winner: this.gameInfo.winner,
      });
    }
    // let currentGame = localStorage.getItem('currentGame');
    // if (currentGame && currentGame === this.gameId) {
    const user = await this.getUserInfo();
    const userId = typeof (user) === 'object' ? user.attributes.sub : user;
    if (this.gameInfo.creator.id === userId) {
      this.orientation = this.gameInfo.creatorOrientation;
      this.opponent = this.gameInfo.opponent;
    } else if (this.gameInfo.opponent.id === userId) {
      this.orientation = this.gameInfo.creatorOrientation === 'white' ? 'black' : 'white';
      this.opponent = this.gameInfo.creator;
    } else {
      this.isViewer = true;
    }
    console.log(this.orientation, userId, this.gameInfo.opponent.id, this.gameInfo.creator.id);
    let initialFen = '';
    const startTime = parseInt(this.gameInfo.time);
    let yourTurn = this.orientation === 'white';
    this.gameId = this.gameInfo.id;
    const { variant } = this.gameInfo;
    switch (variant) {
    case Games.ANTICHESS:
      this.game = new Chess(Games.STANDARD_FEN, 1);
      initialFen = Games.STANDARD_FEN;
      break;
    case Games.GRID_CHESS:
      this.game = new Chess(Games.STANDARD_FEN, 2);
      initialFen = Games.STANDARD_FEN;
      this.boardId = 'grid-board';
      break;
    case Games.EXTINCTION_CHESS:
      this.game = new Chess(Games.STANDARD_FEN, 3);
      initialFen = Games.STANDARD_FEN;
      break;
    case Games.STANDARD_CHESS:
      this.game = new Chess();
      initialFen = Games.STANDARD_FEN;
      break;
    default:
      this.game = new Chess();
      initialFen = Games.STANDARD_FEN;
    }
    if (this.gameInfo.result) {
      // if a game was ended, play all the moves to the end
      this.gameInfo.history.forEach((move) => {
        this.game.move(move);
      });
      this.setState({
        fen: this.game.fen(),
      });
      return;
    }
    if (this.gameInfo.fen !== 'init') {
      initialFen = this.gameInfo.fen;
      this.game.load(initialFen);
      yourTurn = this.game.turn() === this.orientation[0];
    }
    this.setState({
      fen: initialFen, yourTurn, turn: this.game.turn(), timeW: startTime, timeB: startTime,
    });
    this.gameUpdateSubscription = API.graphql(graphqlOperation(
      subscriptions.onUpdateGameState, { id: gameId },
    )).subscribe({
      next: (gameData) => {
        const gameState = gameData.value.data.onUpdateGameState;
        if (this.gameInfo.id === gameState.id) {
          this.game.load(gameState.fen);
          this.gameInfo.ended = gameState.ended;
          const yourTurn = this.game.turn() === this.orientation[0];
          // let gameResult
          // if (gameState.ended === true) {
          //   if (this.game.game_over()) {
          //     //checkmate or stalemate
          //     if (this.game.in_checkmate) {
          //       //let winner = this.game.turn() === 'w'? "Black" : "White"
          //       gameResult = `CHECKMATE: YOU LOSE!`
          //     }
          //     // else the game ended in stalemate.
          //     else gameResult = 'STALEMATE: TIE GAME!'
          //   }
          //   else {
          //     //Player on the other end left the game.
          //     alert('The other player has left the game')
          //   }
          //   this.gameUpdateSubscription.unsubscribe()
          //   yourTurn = false
          // }
          this.setState({
            fen: gameState.fen,
            yourTurn,
            gameResult: gameState.result,
            history: gameState.history,
            turn: this.game.turn(),
          });
        }
      },
    });
  }

  componentWillUnmount() {
    if (this.gameUpdateSubscription) { this.gameUpdateSubscription.unsubscribe(); }
    // if (!this.game.game_over() && !this.gameInfo.ended)
    //   this.leaveGame()
  }

  getUserInfo = async () => {
    let userInfo;
    await Auth.currentAuthenticatedUser().then((user) => {
      userInfo = { ...user };
    }).catch(async (e) => {
      await Auth.currentCredentials().then((credential) => {
        userInfo = credential.identityId.split(':')[1];
      });
    });
    return userInfo;
  }

  // chessboard.jsx method for responsive board sizing
  calcWidth = (dimensions) => {
    let customWidth = Math.min(600 / 640 * dimensions.screenWidth, 600 / 640 * dimensions.screenHeight);
    if (customWidth < 300) customWidth = 300;
    return (dimensions.screenWidth < 640 || dimensions.screenHeight < 640) ? customWidth : 540;
  }

  // chessboard.jsx method for defining what happens when user clicks a square
  onSquareClick = async (square) => {
    if (!this.game) return;
    if (this.game.turn() !== this.orientation[0]) return;
    if (this.game.game_over() || this.gameInfo.ended) {
      alert('GAME OVER');
      return;
    }
    const piece = this.game.get(square);
    if (this.moveFrom !== null) {
      const move = this.game.move({ from: this.moveFrom, to: square });
      if (move !== null) {
        const updateGameData = {};
        updateGameData.id = this.gameId;
        updateGameData.fen = this.game.fen();
        let gameResult = '';
        if (this.game.game_over()) {
          if (this.game.in_checkmate) {
            gameResult = 'CHECKMATE: YOU WIN!';
          } else gameResult = 'STALEMATE: TIE GAME!';
          this.gameUpdateSubscription.unsubscribe();
          updateGameData.ended = true;
        }
        updateGameData.history = [...this.state.history, move.san];
        this.setState({
          fen: this.game.fen(),
          squareStyles: {},
          yourTurn: false,
          gameResult,
          history: [...this.state.history, move.san],
          turn: this.game.turn(),
        });
        // end the game if necessary
        const result = this.updateGameResult();
        if (result) {
          updateGameData.result = result;
          updateGameData.winner = this.game.turn() === 'w' ? 'Black' : 'White';
          updateGameData.ended = true;
          console.log('game end', this.game.turn(), result);
        }
        const updated = await API.graphql(graphqlOperation(
          mutations.updateGameState, { input: updateGameData },
        ));
        console.log('moved', updated, move.san, this.state.history, updateGameData);
        this.moveFrom = null;
        return;
      }
    }
    const newSquareStyles = {};
    if (piece !== null && piece.color === this.orientation[0]) {
      this.moveFrom = square;
      const validMoves = this.game.moves({ square, verbose: true });
      newSquareStyles[square] = { backgroundColor: Colors.BOARD_HIGHLIGHT_COLOR };
      validMoves.forEach((move) => {
        newSquareStyles[move.to] = {
          background: `radial-gradient(circle, ${Colors.BOARD_HIGHLIGHT_COLOR} 50%, transparent 20%)`,
          borderRadius: '50%',
        };
      });
    }
    this.setState({ squareStyles: newSquareStyles });
  }

  updateGameResult = () => {
    if (this.game.game_over() || this.state.history.length >= 50) {
      let result;
      if (this.game.in_checkmate()) {
        result = 'checkmate';
      } else if (this.gameInfo.variant === Games.EXTINCTION_CHESS && this.game.extinguished()) {
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
      return result;
    }
    /* (we will pass the value of this.state.gameResult to GameData) */
  }

  prevMove = () => {
    if (this.game.history().length > 0) {
      const reverseHistory = [...this.state.reverseHistory, this.game.history().pop()];
      this.game.undo();
      this.setState({
        fen: this.game.fen(),
        reverseHistory,
      }, () => console.log(this.game.fen(), this.state.fen));
      console.log(this.game.history(), this.state.reverseHistory);
    }
  }

  nextMove = () => {
    const reverseHistory = [...this.state.reverseHistory];
    if (reverseHistory.length > 0) {
      const move = reverseHistory.pop();
      const newMove = this.game.move(move);
      this.setState({
        fen: this.game.fen(),
        reverseHistory,
      }, () => console.log(this.game.fen(), this.state.fen));
      console.log(move, newMove.san, this.game.history(), reverseHistory);
    }
  }

  setClockRefWhite(ref) {
    this.clockRefWhite = ref;
  }

  setClockRefBlack(ref) {
    this.clockRefBlack = ref;
  }

  leaveGame = () => {
    // this should be called if a player resign
    // should also include newGameState.result stating who resigned and who won
    const newGameState = {};
    newGameState.id = this.gameId;
    newGameState.ended = true;
    API.graphql(graphqlOperation(
      mutations.updateGameState, { input: newGameState },
    ));
  }

  startWhite() {
    this.clockRefWhite.start();
  }

  pauseWhite() {
    this.clockRefWhite.pause();
  }

  startBlack() {
    this.clockRefBlack.start();
  }

  pauseBlack() {
    this.clockRefBlack.pause();
  }


  render() {
    const { state } = this;
    let players = '';
    if (this.isViewer && (this.gameInfo !== null)) {
      players = `${this.gameInfo.creator.username} vs ${this.gameInfo.opponent.username}`;
    } else {
      players = `You vs ${this.opponent !== null ? this.opponent.username : 'Anonymous'}`;
    }
    return (
      <div style={{ paddingTop: '1em' }}>
        <Grid container justify="center" direction="row" spacing={1}>
          <div className="App">
            <Widget
              title="Chat with your opponent"
              subtitle=""
            />
          </div>
          <Grid container item justify="center" direction="row" wrap="wrap" spacing={1}>
            <Box display="flex" flexDirection="column">
              <GameInfo
                yourTurn={state.yourTurn && !state.gameOver ? YOUR_TURN_MESSAGE : ''}
                players={players}
                variant={this.gameInfo !== null ? this.gameInfo.variant : ''}
                gameResult={state.gameResult}
              />
              <div id={this.boardId}>
                <Chessboard
                  position={state.fen}
                  lightSquareStyle={{ backgroundColor: Colors.LIGHT_SQUARE }}
                  darkSquareStyle={{ backgroundColor: Colors.DARK_SQUARE }}
                  orientation={this.orientation}
                  squareStyles={state.squareStyles}
                  onSquareClick={this.onSquareClick}
                  calcWidth={this.calcWidth}
                />
              </div>
              <Box maxWidth="540px">
                <GameData
                  turn={state.turn}
                  history={state.history}
                  fen={state.fen}
                  gameResult={state.gameResult}
                  winner={state.winner}
                  prevMove={this.prevMove}
                  nextMove={this.nextMove}
                  currentMove={state.history.length - state.reverseHistory.length}
                />
              </Box>
              <Clock refCallback={this.setClockRefBlack} time={state.timeB} />
              <Clock refCallback={this.setClockRefWhite} time={state.timeW} />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Game;
