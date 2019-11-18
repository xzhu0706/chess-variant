import React, { Component } from 'react';
import {API, graphqlOperation } from 'aws-amplify';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as mutations from '../graphql/mutations';
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
    }
    this.game = null
    this.opponent = null // the opponent. null if user created or joined game anonymously
    this.gameId = null
    this.orientation = ''
    this.gameUpdateSubscription = null
    this.moveFrom = null
    this.gameInfo = null
  }

  componentDidMount(){
    let game = this.props.location.state.message
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
    this.gameId = game.id
    let variant = game.variant
    switch(variant){
      case Games.ANTICHESS:
        //this.game = new Antichess() waiting for Antichess.js implementation
        //this.setState({fen: Constants.ANTICHESS_FEN})
        this.game = new Chess()
        initialFen = Games.STANDARD_FEN
        break
      case Games.STANDARD_CHESS:
        this.game = new Chess()
        initialFen = Games.STANDARD_FEN
        break;
      default:
        this.game = new Chess()
        initialFen = Games.STANDARD_FEN
    }
    this.setState({fen: initialFen})
    this.gameUpdateSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateGame),).subscribe({
      next: (gameData) => {
        let gameState = gameData.value.data.onUpdateGame
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
      let validMoves = this.game.moves({ square: square , verbose: true})
      newSquareStyles[square] = { backgroundColor: Colors.BOARD_HIGHLIGHT_COLOR }
      for (let i in validMoves) {
        let move = validMoves[i].to;
        newSquareStyles[move] = {
          background: `radial-gradient(circle, ${Colors.BOARD_HIGHLIGHT_COLOR} 26%, transparent 30%)`,
          borderRadius: "50%"
        }
      }
    }
    this.setState({ squareStyles: newSquareStyles })
  }

  render(){
    const boardStyle = {
      marginLeft: '15%',
      marginTop: '25%'
    }
    return (
      <Box display='flex' justifyContent='center'>
        <Box display='flex' flexDirection='column'>
          <Paper>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', marginLeft: '5px'}} variant="h5" component="h3">
              You vs {this.opponent !== null? this.opponent.username : 'Anonymous'}.
            </Typography>
            <Typography style={{fontFamily: 'AppleSDGothicNeo-Bold', marginLeft: '5px'}}component="p">
              {this.game !== null && this.game.turn() === this.orientation[0]? YOUR_TURN_MESSAGE : ''}
            </Typography>
          </Paper>
          <Chessboard
            position={this.state.fen}
            lightSquareStyle={{ backgroundColor: Colors.LIGHT_SQUARE }}
            darkSquareStyle={{ backgroundColor: Colors.DARK_SQUARE }}
            orientation={this.orientation}
            squareStyles={this.state.squareStyles}
            onSquareClick={this.onSquareClick}
          />
        </Box>
      </Box>
    )
  }
}

export default Game