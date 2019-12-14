import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { Prompt } from 'react-router';
import Box from '@material-ui/core/Box';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import { Launcher } from 'react-chat-window';
import * as customQueries from '../customGraphql/queries';
import * as customMutations from '../customGraphql/mutations';
import * as customSubscriptions from '../customGraphql/subscriptions';
import * as Games from '../Constants/GameComponentConstants';
import * as Colors from '../Constants/Colors';
import '../variant-style.css';
import './Game.css';
// import Clock from '../components/Clock';
import GameData from '../components/GameData';
import GameInfo from '../components/GameInfo';
import awsconfig from '../aws-exports';


const YOUR_TURN_MESSAGE = 'It\'s your turn!';

class Game extends Component {
  clockRefWhite = null;

  clockRefBlack = null;

  constructor(props) {
    super(props);
    this.state = {
      fen: '',
      time: 0,
      squareStyles: {},
      yourTurn: false,
      showGameResignationDialog: false,
      history: [],
      gameResult: '',
      winner: '',
      reverseHistory: [],
      messagesCount: 0,
      messageList: [],
      isChatWidgetOpen: false,
      turn: '',
    };
    this.game = null;
    this.opponent = null;
    this.gameId = null;
    this.orientation = '';
    this.gameUpdateSubscription = null;
    this.messageCreationSubscription = null;
    this.moveFrom = null;
    this.gameInfo = null;
    this.boardId = '';
    this.isViewer = false;
    this.currentUser = null;
    // adding listener for reloading or exiting page since component will not be unmount
    // component only will be unmount if go to other pages in our site
    this.addedLeaveGameListener = false;
  }

  async componentDidMount() {
    const gameId = this.props.match.params.id;
    this.currentUser = await this.getUserInfo();
    const queryResult = await API.graphql(graphqlOperation(customQueries.getGame, { id: gameId }));
    this.gameInfo = queryResult.data.getGame;
    let initialMessages = this.gameInfo.messages.items;
    initialMessages = initialMessages.map((message) => {
      const author = message.author.id === this.currentUser.id ? 'me' : 'them';
      return {
        author,
        type: 'text',
        data: { text: message.content },
      };
    });

    // Represents the count of new messages to display on the chat widget badge.
    // local storage is used to keep the count, so that the correct number can be
    // displayed in case the page gets reloaded.
    let messagesCount = 0;
    if (localStorage.getItem(gameId)) {
      messagesCount = parseInt(localStorage.getItem(gameId));
    }

    this.setState({
      history: this.gameInfo.history ? [...this.gameInfo.history] : [],
      gameResult: this.gameInfo.result,
      winner: this.gameInfo.winner,
      messagesCount,
      messageList: [...initialMessages],
    });

    if (this.gameInfo.creator.id === this.currentUser.id) {
      this.orientation = this.gameInfo.creatorOrientation;
      this.opponent = this.gameInfo.opponent;
    } else if (this.gameInfo.opponent.id === this.currentUser.id) {
      this.orientation = this.gameInfo.creatorOrientation === 'white' ? 'black' : 'white';
      this.opponent = this.gameInfo.creator;
    } else {
      this.isViewer = true;
    }

    // const startTime = parseInt(this.gameInfo.time, 10);
    this.gameId = this.gameInfo.id;
    const { variant } = this.gameInfo;
    switch (variant) {
    case Games.ANTICHESS:
      this.game = new Chess(Games.STANDARD_FEN, 1);
      break;
    case Games.GRID_CHESS:
      this.game = new Chess(Games.STANDARD_FEN, 2);
      this.boardId = 'grid-board';
      break;
    case Games.EXTINCTION_CHESS:
      this.game = new Chess(Games.STANDARD_FEN, 3);
      break;
    case Games.STANDARD_CHESS:
      this.game = new Chess();
      break;
    default:
      this.game = new Chess();
    }
    const yourTurn = !this.gameInfo.ended && this.game.turn() === this.orientation[0];
    if (this.gameInfo.history) {
      this.gameInfo.history.forEach((move) => {
        this.game.move(move);
      });
    }
    this.setState({
      fen: this.game.fen(),
      yourTurn,
      turn: this.game.turn(),
    });

    if (!this.gameInfo.ended && !this.isViewer) {
      window.addEventListener('beforeunload', this.handleLeavePage);
      window.addEventListener('unload', this.leaveGame);
      this.addedLeaveGameListener = true;
    }

    this.messageCreationSubscription = API.graphql(graphqlOperation(customSubscriptions.onCreateMessage)).subscribe({
      next: (messageData) => {
        const message = messageData.value.data.onCreateMessage;
        const gameId = message.game.id;
        const authorId = message.author.id;
        if (gameId === this.gameId && authorId !== this.currentUser.id) {
          // addResponseMessage(message.content)
          const widgetOpen = this.state.isChatWidgetOpen;
          const messagesCount = widgetOpen ? 0 : this.state.messagesCount + 1;
          this.setState({
            messagesCount,
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text: message.content },
            }],
          });
          if (!widgetOpen) {
            localStorage.setItem(this.gameId, messagesCount);
          }
        }
      },
    });

    this.gameUpdateSubscription = API.graphql(graphqlOperation(
      customSubscriptions.onUpdateGameState, { id: gameId },
    )).subscribe({
      next: (gameData) => {
        const gameState = gameData.value.data.onUpdateGameState;
        if (this.gameInfo.id === gameState.id) {
          if (gameState.history && (gameState.history.length > this.state.history.length)) {
            this.game.move(gameState.history[gameState.history.length - 1]);
          }
          this.gameInfo.ended = gameState.ended;
          const yourTurn = !gameState.ended && this.game.turn() === this.orientation[0];
          // let gameResult;
          // let winner;
          // if (gameState.ended === true) {
          //   if (this.game.game_over()) {
          //     if (this.game.in_checkmate) {
          //       // checkmate or stalemate
          //       winner = this.game.turn() === 'w' ? 'Black' : 'White';
          //       gameResult = 'CHECKMATE: YOU LOSE!';
          //     } else {
          //       // else the game ended in stalemate.
          //       gameResult = 'STALEMATE: TIE GAME!';
          //     }
          //   } else {
          //     // Player on the other end left the game.
          //     alert('The other player has left the game!')
          //   }
          //   this.gameUpdateSubscription.unsubscribe();
          //   yourTurn = false;
          // }
          if (gameState.gameResult && this.addedLeaveGameListener) {
            window.removeEventListener('beforeunload', this.handleLeavePage);
            window.removeEventListener('unload', this.leaveGame);
          }
          this.setState({
            fen: this.game.fen(),
            yourTurn,
            turn: this.game.turn(),
            gameResult: gameState.result,
            history: gameState.history,
            winner: gameState.winner,
          });
        }
      },
    });
  }

  handleLeavePage = (e) => {
    const confirmationMessage = 'Are you sure you want to leave the game?';
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location.search === this.props.location.search;
  }

  componentWillUnmount() {
    if (this.gameUpdateSubscription) {
      this.gameUpdateSubscription.unsubscribe();
    }
    if (!this.game.game_over() && !this.gameInfo.ended) {
      this.leaveGame();
    }
    if (this.addedLeaveGameListener) {
      window.removeEventListener('beforeunload', this.handleLeavePage);
      window.removeEventListener('unload', this.leaveGame);
    }
    localStorage.removeItem(this.gameId);
    if (this.messageCreationSubscription) {
      this.messageCreationSubscription.unsubscribe();
    }
  }

  // chessboard.jsx method for defining what happens when user clicks a square
  onSquareClick = async (square) => {
    if (!this.game) return;
    if (this.game.turn() !== this.orientation[0]) return;
    if (this.game.game_over() || this.gameInfo.ended) {
      return;
    }
    const piece = this.game.get(square);
    if (this.moveFrom !== null) {
      const move = this.game.move({ from: this.moveFrom, to: square });
      if (move !== null) {
        const updateGameData = {};
        updateGameData.id = this.gameId;
        updateGameData.fen = this.game.fen();
        // let gameResult = '';
        // if (this.game.game_over()) {
        //   if (this.game.in_checkmate) {
        //     gameResult = 'CHECKMATE: YOU WIN!';
        //   } else gameResult = 'STALEMATE: TIE GAME!';
        //   this.gameUpdateSubscription.unsubscribe();
        //   updateGameData.ended = true;
        // }
        updateGameData.history = [...this.state.history, move.san];
        // end the game if necessary
        const gameResult = this.updateGameResult();
        if (gameResult) {
          const draw = ['repetition', 'stalemate', 'insufficient', 'fifty'];
          updateGameData.result = gameResult;
          if (!draw.includes(gameResult)) {
            // update winner if game result is not a draw
            updateGameData.winner = this.game.turn() === 'w' ? 'Black' : 'White';
          }
          updateGameData.ended = true;
        }
        this.setState({
          fen: this.game.fen(),
          squareStyles: {},
          yourTurn: false,
          gameResult,
          history: [...this.state.history, move.san],
          turn: this.game.turn(),
        });
        await API.graphql(graphqlOperation(
          customMutations.updateGameState, { input: updateGameData },
        ));
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

  setClockRefWhite(ref) {
    this.clockRefWhite = ref;
  }

  setClockRefBlack(ref) {
    this.clockRefBlack = ref;
  }

  prevMove = () => {
    if (this.game.history().length > 0) {
      const reverseHistory = [...this.state.reverseHistory, this.game.history().pop()];
      this.game.undo();
      this.setState({
        fen: this.game.fen(),
        reverseHistory,
      });
    }
  }

  nextMove = () => {
    const reverseHistory = [...this.state.reverseHistory];
    if (reverseHistory.length > 0) {
      const move = reverseHistory.pop();
      this.game.move(move);
      this.setState({
        fen: this.game.fen(),
        reverseHistory,
      });
    }
  }

  updateGameResult = () => {
    if (this.game.game_over()) {
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
    return '';
  }

  // chessboard.jsx method for responsive board sizing
  calcWidth = (dimensions) => {
    let customWidth = Math.min(dimensions.screenWidth, 600 / 640 * dimensions.screenHeight);
    if (customWidth < 300) customWidth = 300;
    return (dimensions.screenWidth < 640 || dimensions.screenHeight < 640) ? customWidth : 540;
  }

  leaveGame = () => {
    // this should be called if a player resign
    // should also include newGameState.result stating who resigned and who won
    const newGameState = {};
    const winner = this.orientation === 'white' ? 'Black' : 'White';
    const loser = winner === 'White' ? 'Black' : 'White';
    newGameState.id = this.gameId;
    newGameState.ended = true;
    newGameState.result = `${loser} left the game, ${winner} wins`;
    newGameState.winner = winner;
    // using xhr request manually because graphql operation is asynchrounous, which cannot finish on page unload
    const xhr = new XMLHttpRequest();
    xhr.open('POST', awsconfig.aws_appsync_graphqlEndpoint, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-api-key', awsconfig.aws_appsync_apiKey);
    xhr.send(JSON.stringify({
      query: customMutations.updateGameState,
      variables: {
        input: newGameState,
      },
    }));
  }

  handleNewUserMessage = async (message) => {
    const messageObject = {};
    messageObject.author = this.currentUser;
    messageObject.messageGameId = this.gameId;
    messageObject.content = message.data.text;
    API.graphql(graphqlOperation(customMutations.createMessage, { input: messageObject }));
    this.setState({ messageList: [...this.state.messageList, message] });
  }

  getUserInfo = async () => {
    const currentUser = {};
    await Auth.currentAuthenticatedUser().then((user) => {
      currentUser.id = user.attributes.sub;
      currentUser.username = user.username;
    }).catch(async (e) => {
      await Auth.currentCredentials().then((credential) => {
        currentUser.id = credential.identityId.split(':')[1];
        currentUser.username = 'anonymous';
      });
    });
    return currentUser;
  }

  toggleWidget = () => {
    this.setState({ isChatWidgetOpen: !this.state.isChatWidgetOpen });
    this.setState({ messagesCount: 0 });
    localStorage.setItem(this.gameId, 0);
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
      <Box key={this.gameId} display="flex" flexDirection="row" justifyContent="flex-start">
        <Prompt
          when={!state.gameResult}
          message="Are you sure you want to leave?"
        />
        <Box style={{ width: '30%' }}>
          <Launcher
            agentProfile={{
              teamName: 'Chat with your opponent',
              imageUrl: '',
            }}
            onMessageWasSent={this.handleNewUserMessage}
            handleClick={this.toggleWidget}
            messageList={state.messageList}
            isOpen={state.isChatWidgetOpen}
            showEmoji={false}
            newMessagesCount={state.messagesCount}
          />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" marginRight="30px">
          <GameInfo
            yourTurn={state.yourTurn === true ? YOUR_TURN_MESSAGE : ''}
            players={players}
            variant={this.gameInfo !== null ? this.gameInfo.variant : ''}
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
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" width="50%">
          <GameData
            style={{ width: '100%' }}
            turn={state.turn}
            history={state.history}
            fen={state.fen}
            gameResult={state.gameResult}
            winner={state.winner}
            prevMove={this.prevMove}
            nextMove={this.nextMove}
            currentMove={state.history !== null ? state.history.length - state.reverseHistory.length : 0}
          />
        </Box>
      </Box>
    );
  }
}

export default Game;
