import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import WithMoveValidation from '../WithMoveValidation';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import './Game.css';
import * as Games from '../Constants/GameComponentConstants';
import * as Colors from '../Constants/Colors';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      fen: '',
      time: '',
      squareStyles: {},
    }
    this.game = null
    this.opponent = null
    this.gameId = 0
    this.orientation = ''
    this.gameUpdateSubscription = null
    this.moveFrom = null
    this.gameInfo = null
  }

  componentDidMount(){
    let game = this.props.location.state.message
    alert(JSON.stringify(game))
    this.gameInfo = game
    if (game.createdIt === true) {
      this.orientation = game.creatorOrientation
      this.opponent = game.opponent
    }
    else {
      this.orientation = game.creatorOrientation === 'white'? 'black' : 'white'
      this.opponent = game.creator
    }
    this.gameId = game.id
    let variant = game.variant
    switch(variant){
      case Games.ANTICHESS:
        //this.game = new Antichess() waiting for Antichess.js implementation
        //this.setState({fen: Constants.ANTICHESS_FEN})
        this.game = new Chess()
        this.setState({fen: Games.STANDARD_FEN})
        break
      case Games.STANDARD_CHESS:
        this.game = new Chess()
        this.setState({fen: Games.STANDARD_FEN})
        break;
      default:
        this.game = new Chess()
        this.setState({fen: Games.STANDARD_FEN})
    }

    this.gameUpdateSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateGame),).subscribe({
      next: (gameData) => {
        let gameState = gameData.value.data.onUpdateGame
        alert("GAME UPDATE: " + gameState.id)
        if(this.gameInfo.id === gameState.id){
          this.setState({fen: gameState.fen})
          this.game.load(gameState.fen)
        }
      },
    });

  }

  onSquareClick =  async (square) => {
    if(this.game.turn() !== this.orientation[0]) return
    let piece = this.game.get(square)
    if(this.moveFrom !== null){
      let move = this.game.move({from: this.moveFrom, to: square})
      if(move !== null){
        this.setState({fen: this.game.fen(), squareStyles: {}})
        let gameInfo = this.gameInfo;
        gameInfo.fen = this.game.fen()
        delete gameInfo['__typename']
        let creator = gameInfo['creator']
        delete creator['__typename']
        gameInfo['creator'] = creator
        delete gameInfo['createdIt']
        alert("AfTER DELETING TYPENAME: " + JSON.stringify(gameInfo))
        await API.graphql(graphqlOperation(mutations.updateGame, {input: gameInfo}))
        alert('UPDATED')
        this.moveFrom = null
        return
      }        
    }
    let newSquareStyles = {}
    if (piece !== null && piece.color === this.orientation[0]) {
      this.moveFrom = square
      let validMoves = this.game.moves({ square: square })
      newSquareStyles[square] = { backgroundColor: 'blue' }
      for (let i in validMoves) {
        let move = validMoves[i];
        move = move.length < 3 ? move : move.substring(1)
        newSquareStyles[move] = {
          background: "radial-gradient(circle, #fffc00 26%, transparent 40%)",
          borderRadius: "50%"
        }
      }
    }
    //alert(JSON.stringify(newSquareStyles))
    this.setState({ squareStyles: newSquareStyles })
    
  }

  render(){
    const boardStyle = {
      marginLeft: '15%',
      marginTop: '25%'
    }
    alert("FEN: " + this.state.fen)
    return (
      <Box display='flex' justifyContent='center'>
        <Chessboard
          position = {this.state.fen}
          lightSquareStyle = {{backgroundColor: Colors.GRAY}}
          darkSquareStyle = {{backgroundColor: 'white'}}
          orientation = {this.orientation}
          squareStyles = {this.state.squareStyles}
          onSquareClick = {this.onSquareClick}
        />
      </Box>
    )
  }
}

export default Game

/*class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        // {
        //   // text: 'This is a test message!',
        //   // member: {
        //   //   username: 'bluemoon'
        //   // }
        // }
      ],
      currentUser: {
        username: 'Anonymous',
      },
      gameToken: '',
      gameState: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const gameToken = match.params.token;
    const user = await Auth.currentUserInfo();
    const username = user ? user.username : 'Anonymous';
    this.setState({
      currentUser: {
        username,
      },
      gameToken,
    });

    this.subscription = API.graphql(
      graphqlOperation(subscriptions.onUpdateGame),
    ).subscribe({
      next: (gameData) => {
        const gameState = gameData.value.data.onUpdateGame;
        console.log('game data subscription', gameData, gameState);
        if (gameState.id === this.state.gameToken) {
          this.setState({
            gameState,
          });
        }
      },
    });

    try {
      const retrieveGame = await API.graphql(graphqlOperation(queries.getGame, { id: gameToken }));
      const gameState = retrieveGame.data.getGame;
      this.setState({ gameState });
      console.log(this.state.gameState, gameToken);
    } catch (err) {
      console.log(err);
    }
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  onSendMessage = (message) => {
    if (!message) {
      return;
    }
    const { messages } = this.state;
    messages.push({
      text: message,
      member: this.state.currentUser,
    });
    this.setState({ messages });

    setTimeout(this.onReceiveMessage, 1000); // need to be removed later
    // TODO: call api
  }

  onReceiveMessage = (message, opponent) => {
    // TODO
    // below is fake static data, need to get data from socket
    const { messages } = this.state;
    messages.push({
      text: 'hello world',
      member: { username: 'alan turing' },
    });
    this.setState({ messages });
  }

  render() {
    const { gameToken, gameState } = this.state;
    console.log(gameState);
    return (
      <div id="game-container">

        <div className="row" style={{ minHeight: '50px' }}>
          {

          }
        </div>

        <div className="row">
          <div style={boardsContainer} className="col-xl-8">
            { WithMoveValidation(gameToken, gameState.turn, gameState.pgn, gameState.fen) }
          </div>

          {/* <div className="col-xl-4 chat-box">
            <ChatMessages
              messages={this.state.messages}
              currentMember={this.state.currentUser}
            />
            <ChatInput
              onSendMessage={this.onSendMessage}
            />
          </div> }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Game;

const boardsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100vw',
};
*/