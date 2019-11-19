import React, { Component } from 'react';
import {API, graphqlOperation } from 'aws-amplify';
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
  }

  async componentDidMount() {
    let game = this.props.location.state.message
    // const { match } = this.props;
    // const gameToken = match.params.token;
    // const retrieveGame = await API.graphql(graphqlOperation(queries.getGame, { id: gameToken }));
    // const game = retrieveGame.data.getGame;
    this.gameInfo = game
    let currentGame = localStorage.getItem('currentGame')
    if (currentGame && currentGame === game.id) {
      this.orientation = game.creatorOrientation
      this.opponent = game.opponent
    }
    else {
      this.orientation = game.creatorOrientation === 'white'? 'black' : 'white'
      this.opponent = game.creator
    }
    let initialFen = ''
    let yourTurn = this.orientation === 'white'? true : false
    this.gameId = game.id
    let variant = game.variant
    switch(variant){
      case Games.ANTICHESS:
        this.game = new Chess(Games.STANDARD_FEN, 1)
        initialFen = Games.STANDARD_FEN
        break
      case Games.GRID_CHESS:
        this.game = new Chess(Games.STANDARD_FEN, 2)
      case Games.STANDARD_CHESS:
        this.game = new Chess()
        initialFen = Games.STANDARD_FEN
        break;
      default:
        this.game = new Chess()
        initialFen = Games.STANDARD_FEN
    }
    this.setState({fen: initialFen, yourTurn})
    this.gameUpdateSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateGame),).subscribe({
      next: (gameData) => {
        let gameState = gameData.value.data.onUpdateGame
        if(this.gameInfo.id === gameState.id){
          this.game.load(gameState.fen)
          let yourTurn = this.game.turn() === this.orientation[0]? true : false
          this.setState({fen: gameState.fen, yourTurn})
        }
      },
    });
  }

  onSquareClick = async (square) => {
    if(this.game.turn() !== this.orientation[0]) return
    let piece = this.game.get(square)
    if(this.moveFrom !== null){
      let move = this.game.move({from: this.moveFrom, to: square})
      if(move !== null){
        this.setState({fen: this.game.fen(), squareStyles: {}, yourTurn: false})
        let gameInfo = this.gameInfo;
        delete gameInfo['__typename']
        let creator = gameInfo['creator']
        if(creator !== null)
          delete creator['__typename']
        let opponent = gameInfo['opponent']
        if(opponent !== null)
          delete opponent['__typename']
        gameInfo['opponent'] = opponent
        gameInfo['creator'] = creator
        gameInfo.fen = this.game.fen()
        API.graphql(graphqlOperation(mutations.updateGame, {input: gameInfo}))
        this.moveFrom = null
        return
      }        
    }
    let newSquareStyles = {}
    if (piece !== null && piece.color === this.orientation[0]) {
      this.moveFrom = square
      let validMoves = this.game.moves({ square: square, verbose: true })
      newSquareStyles[square] = { backgroundColor: Colors.BOARD_HIGHLIGHT_COLOR }
      validMoves.forEach(move => {
        newSquareStyles[move.to] = {
          background: `radial-gradient(circle, ${Colors.BOARD_HIGHLIGHT_COLOR} 26%, transparent 30%)`,
          borderRadius: "50%"
        }
      })
    }
    this.setState({ squareStyles: newSquareStyles })
  }

  render(){
    const boardStyle = {
      marginLeft: '15%',
      marginTop: '25%'
    }
    const boardId = this.gameInfo && this.gameInfo.variant === Games.GRID_CHESS && "grid-board"; // if variant isn't grid chess, boardId will be set to false
    console.log('board id', boardId, this.gameInfo)
    return (
      <Box display='flex' justifyContent='center'>
        <Box display='flex' flexDirection='column'>
          <Paper>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.CHARCOAL, marginLeft: '5px'}} variant="h5" component="h3">
              You vs {this.opponent !== null? this.opponent.username : 'Anonymous'}.
            </Typography>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.CHARCOAL, marginLeft: '5px'}}component="p">
              {this.state.yourTurn === true? YOUR_TURN_MESSAGE : ''}
            </Typography>
          </Paper>
          <div id={boardId}>
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