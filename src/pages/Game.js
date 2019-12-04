import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
import GameData from '../GameData';
import GameInfo from '../components/GameInfo';
import { Widget, toggleWidget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {Launcher} from 'react-chat-window'


const YOUR_TURN_MESSAGE = 'It\'s your turn!';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fen: '',
      time: '',
      squareStyles: {},
      yourTurn: false,
      showGameResignationDialog: false,
      gameResult: '',
      history: [],
      messageList: [],
      gameOver: false,
      gameResult: '',
      winner: '',
      reverseHistory: [],
      messagesCount: 0,
      messageList: [],
      isChatWidgetOpen: false,
    };
    this.game = null;
    this.opponent = null; // the opponent. null if user created or joined game anonymously
    this.gameId = null;
    this.orientation = '';
    this.gameUpdateSubscription = null;
    this.messageCreationSubscription = null;
    this.moveFrom = null;
    this.gameInfo = null;
    this.boardId = '';
    this.isViewer = false;
    this.currentUser = null;
    this.widgetHasBeenLaunched = false;
    this.initialMessages = [];
  }

  async componentDidMount() {
    const gameId = this.props.match.params.id;
    this.currentUser = await this._getUserInfo()
    const queryResult = await API.graphql(graphqlOperation(queries.getGame, { id: gameId }));
    this.gameInfo = queryResult.data.getGame;
    let initialMessages = this.gameInfo.messages.items
    initialMessages = initialMessages.map((message) => {
      let author = message.author.id === this.currentUser.id? 'me' : 'them'
        return {
          author: author,
          type: 'text',
          data: {text: message.content}
        }
    });
    if (this.gameInfo.history) {
      console.log('getting history from db', this.gameInfo);
      this.setState({
        history: [...this.gameInfo.history],
        gameOver: !!this.gameInfo.result,
        gameResult: this.gameInfo.result,
        winner: this.gameInfo.winner,
      });
    }
    //Represents the count of new messages to display on the chat widget badge.
    let messagesCount;
    if(localStorage.getItem(gameId)){
      messagesCount = parseInt(localStorage.getItem(gameId))
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
    this.setState({ fen: initialFen, yourTurn, messagesCount, messageList: [...initialMessages]});

    this.messageCreationSubscription = API.graphql(graphqlOperation(subscriptions.onCreateMessage)).subscribe({
      next: (messageData) => {
        const message = messageData.value.data.onCreateMessage
        const gameId = message.game.id;
        let authorId = message.author.id
        if(gameId === this.gameId && authorId !== this.currentUser.id){
          //addResponseMessage(message.content)
          let widgetOpen = this.state.isChatWidgetOpen
          let messagesCount = widgetOpen? 0 : this.state.messagesCount + 1
          this.setState({
            messagesCount,
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text: message.content }
            }]
          })
          if(!widgetOpen)
            localStorage.setItem(this.gameId, messagesCount)
        }
      },
    });

    this.gameUpdateSubscription = API.graphql(graphqlOperation(
      subscriptions.onUpdateGameState, { id: gameId },
    )).subscribe({
      next: (gameData) => {
        const gameState = gameData.value.data.onUpdateGameState;
        if (this.gameInfo.id === gameState.id) {
          this.game.load(gameState.fen);
          this.gameInfo.ended = gameState.ended
          let yourTurn = this.game.turn() === this.orientation[0];
          let gameResult
          if (gameState.ended === true) {
            if (this.game.game_over()) {
              //checkmate or stalemate
              if (this.game.in_checkmate) {
                //let winner = this.game.turn() === 'w'? "Black" : "White"
                gameResult = `CHECKMATE: YOU LOSE!`
              }
              // else the game ended in stalemate.
              else gameResult = 'STALEMATE: TIE GAME!'
            }
            else {
              //Player on the other end left the game.
              alert('The other player has left the game!')
            }
            this.gameUpdateSubscription.unsubscribe()
            yourTurn = false
          }
          this.setState({ fen: gameState.fen, yourTurn, gameResult, history: gameState.history });

        }
      },
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location.search === this.props.location.search
  }
  componentWillUnmount() {
    if (this.gameUpdateSubscription)
      this.gameUpdateSubscription.unsubscribe()
    if (!this.game.game_over() && !this.gameInfo.ended)
      this.leaveGame()
    localStorage.removeItem(this.gameId)
    if(this.messageCreationSubscription)
      this.messageCreationSubscription.unsubscribe()
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

  onSquareClick = async (square) => {
    if (this.game.turn() !== this.orientation[0]) return;
    if (this.game.game_over() || this.gameInfo.ended) {
      return
    }
    const piece = this.game.get(square);
    if (this.moveFrom !== null) {
      const move = this.game.move({ from: this.moveFrom, to: square });
      if (move !== null) {
        const updateGameData = {};
        updateGameData.id = this.gameId;
        updateGameData.fen = this.game.fen();
        let gameResult = ''
        if (this.game.game_over()) {
          if (this.game.in_checkmate) {
            gameResult = `CHECKMATE: YOU WIN!`
          }
          else gameResult = 'STALEMATE: TIE GAME!'
          this.gameUpdateSubscription.unsubscribe()
          updateGameData.ended = true
        }
        updateGameData.history = [...this.state.history, move.san];
        this.setState({
          fen: this.game.fen(),
          squareStyles: {},
          yourTurn: false,
          gameResult,
          history: [...this.state.history, move.san],
        });
        // end the game if necessary
        const result = this.updateGameResult();
        if (result) {
          updateGameData.result = result;
          updateGameData.winner = this.game.turn();
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
          background: `radial-gradient(circle, ${Colors.BOARD_HIGHLIGHT_COLOR} 18%, transparent 15%)`,
          borderRadius: '50%',
        };
      });
    }
    this.setState({ squareStyles: newSquareStyles });
  }

  updateGameResult = () => {
    if (this.game.game_over() || this.state.history.length >= 50) {
      let result = 'fifty'; // fifty move rule
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

  leaveGame = () => {
    let newGameState = {}
    newGameState.id = this.gameId
    newGameState.ended = true;
    API.graphql(graphqlOperation(
      mutations.updateGameState, { input: newGameState },
    ));
  }

  handleNewUserMessage = async (message) => {
    let messageObject = {}
    messageObject.author = this.currentUser
    messageObject.messageGameId = this.gameId
    messageObject.content = message.data.text
    let createdMessage = await API.graphql(graphqlOperation(mutations.createMessage, {input: messageObject}));
    this.setState({messageList: [...this.state.messageList, message]})
  }

  _getUserInfo = async () => {
    let currentUser = {};
    await Auth.currentAuthenticatedUser().then((user) => {
      currentUser.id = user.attributes.sub
      currentUser.username = user.username
    }).catch(async (e) => {
      await Auth.currentCredentials().then((credential) => {
          currentUser.id = credential.identityId.split(':')[1];
          currentUser.username = 'anonymous'
      });
    });
    return currentUser;
  }

  handleToggle = () => {
    //toggleWidget()
    this.setState({isChatWidgetOpen: !this.state.isChatWidgetOpen})
    this.setState({messagesCount: 0})
    localStorage.setItem(this.gameId, 0)
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
      <Box key={this.gameId} display='flex' flexDirection='row' justifyContent='flex-start'>
        <Box style={{width: '30%'}}>
        <Launcher
          agentProfile={{
            teamName: 'react-chat-window',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
            onMessageWasSent={this.handleNewUserMessage}
            handleClick = {this.handleToggle}
            messageList={this.state.messageList}
            isOpen = {this.state.isChatWidgetOpen}
            showEmoji = {false}
            newMessagesCount = {parseInt(this.state.messagesCount)}
          />
        {/*<Widget
            handleNewUserMessage = {this.handleNewUserMessage}
            badge = {this.state.messagesCount}
          />
          <span onClick = {this.handleToggle} style={{
              height: '60px', 
              width: '60px',
              position: 'relative',
              float: 'right',
              marginRight: '52px',
              marginTop: '129%',
              backgroundColor: 'black',
              opacity: '0',
              zIndex: '10'
              }}
            >
            </span>*/}
        </Box>          
        <Box display="flex" flexDirection="column" justifyContent='center' marginRight='30px' >
          <GameInfo
            yourTurn={state.yourTurn === true ? YOUR_TURN_MESSAGE : ''}
            opponent={this.opponent !== null ? this.opponent.username : 'Anonymous'}
            variant={this.gameInfo !== null ? this.gameInfo.variant : ''}
            gameResult={this.state.gameResult}
          />
          <div id={this.boardId}>
            <Chessboard
              position={state.fen}
              lightSquareStyle={{ backgroundColor: Colors.LIGHT_SQUARE }}
              darkSquareStyle={{ backgroundColor: Colors.DARK_SQUARE }}
              orientation={this.orientation}
              squareStyles={state.squareStyles}
              onSquareClick={this.onSquareClick}
            />
          </div>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent='center' width='30%'>
            <GameData style={{ width: '100%' }}
              history={state.history}
              fen={state.fen}
              gameResult={state.gameResult}
              winner={state.winner}
              prevMove={this.prevMove}
              nextMove={this.nextMove}
              currentMove={state.history !== null? state.history.length - state.reverseHistory.length : 0}
            />
        </Box>
      </Box>
    )
  }
}

export default Game;
