import React, { Component } from 'react';
import {API, graphqlOperation, Auth } from 'aws-amplify';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import * as Games from '../Constants/GameComponentConstants';
import * as Colors from '../Constants/Colors';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import '../variant-style.css';

const YOUR_TURN_MESSAGE = `It's your turn!`

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      fen: '',
      time: '',
      squareStyles: {},
      yourTurn: false,
    }
    this.game = null
    this.opponent = null // the opponent. null if user created or joined game anonymously
    this.gameId = null
    this.orientation = ''
    this.gameUpdateSubscription = null
    this.moveFrom = null
    this.gameInfo = null
    this.boardId = ''
  }

  async componentDidMount() {
    const gameId = this.props.match.params.id;
    const queryResult = await API.graphql(graphqlOperation(queries.getGame, { id: gameId }));
    this.gameInfo = queryResult.data.getGame;
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
        break
      case Games.GRID_CHESS:
        this.game = new Chess(Games.STANDARD_FEN, 2);
        initialFen = Games.STANDARD_FEN;
        this.boardId = 'grid-board'
        break
      case Games.EXTINCTION_CHESS:
        this.game = new Chess(Games.STANDARD_FEN, 3);
        initialFen = Games.STANDARD_FEN;
        break
      case Games.STANDARD_CHESS:
        this.game = new Chess();
        initialFen = Games.STANDARD_FEN;
        break;
      default:
        this.game = new Chess();
        initialFen = Games.STANDARD_FEN;
    }
    if (this.gameInfo.fen !== 'init') {
      initialFen = this.gameInfo.fen;
      this.game.load(initialFen);
      yourTurn = this.game.turn() === this.orientation[0];
    }
    this.setState({ fen: initialFen, yourTurn });
    this.gameUpdateSubscription = API.graphql(graphqlOperation(
      subscriptions.onUpdateGameState, { id: gameId },
    )).subscribe({
      next: (gameData) => {
        const gameState = gameData.value.data.onUpdateGameState;
        if (this.gameInfo.id === gameState.id) {
          this.game.load(gameState.fen);
          const yourTurn = this.game.turn() === this.orientation[0];
          this.setState({ fen: gameState.fen, yourTurn });
        }
      },
    });
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
    const piece = this.game.get(square);
    if (this.moveFrom !== null) {
      const move = this.game.move({ from: this.moveFrom, to: square });
      if (move !== null) {
        this.setState({ fen: this.game.fen(), squareStyles: {}, yourTurn: false });
        const updateGameData = {};
        updateGameData.id = this.gameId;
        updateGameData.fen = this.game.fen();
        const updated = await API.graphql(graphqlOperation(mutations.updateGameState, { input: updateGameData }));
        console.log(updated);
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

  render(){
    // const boardStyle = {
    //   marginLeft: '15%',
    //   marginTop: '25%'
    // }
    return (
      <Box display='flex' justifyContent='center'>
        <Box display='flex' flexDirection='column'>
          <Paper style={{border: '1px solid #D3D3D3', marginBottom: '2px'}}>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.CHARCOAL, marginLeft: '5px'}} variant="h5" component="h5">
              You vs {this.opponent !== null? this.opponent.username : 'Anonymous'}
            </Typography>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.CHARCOAL, marginLeft: '5px'}} variant="h6" component="h6">
              Variant: {this.gameInfo !== null? this.gameInfo.variant : ''}
            </Typography>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', color: '#008000', marginLeft: '5px'}}component="p">
              {this.state.yourTurn === true? YOUR_TURN_MESSAGE : ''}
            </Typography>
          </Paper>
          <div id={this.boardId}>
            <Chessboard
              position={this.state.fen}
              lightSquareStyle={{ backgroundColor: Colors.LIGHT_SQUARE }}
              darkSquareStyle={{ backgroundColor: Colors.DARK_SQUARE }}
              orientation={this.orientation}
              squareStyles={this.state.squareStyles}
              onSquareClick={this.onSquareClick}
            />
          </div>
        </Box>
      </Box>
    )
  }
}

export default Game