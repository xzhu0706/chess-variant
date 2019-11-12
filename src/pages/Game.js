import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import PropTypes from 'prop-types';
import WithMoveValidation from '../WithMoveValidation';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import './Game.css';

class Game extends Component {
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
        username: username,
      },
      gameToken: gameToken,
    });

    this.subscription = API.graphql(
      graphqlOperation(subscriptions.onUpdateGame)
    ).subscribe({
      next: gameData => {
        const gameState = gameData.value.data.onUpdateGame
        console.log('game data subscription', gameData, gameState)
        this.setState({
          gameState
        })
      }
    })

    try {
      const retrieveGame = await API.graphql(graphqlOperation(queries.getGame, { id: gameToken }));
      const gameState = retrieveGame.data.getGame;
      this.setState({ gameState })
      console.log(this.state.gameState, gameToken)
    } catch (err) {
      console.log(err)
    }
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  onSendMessage = (message) => {
    if (!message) {
      return;
    }
    const messages = this.state.messages;
    messages.push({
      text: message,
      member: this.state.currentUser
    })
    this.setState({messages: messages})

    setTimeout(this.onReceiveMessage, 1000) // need to be removed later
    // TODO: call api
  }

  onReceiveMessage = (message, opponent) => {
    // TODO
    // below is fake static data, need to get data from socket
    const messages = this.state.messages;
    messages.push({
      text: 'hello world',
      member: {username: 'alan turing'}
    })
    this.setState({messages: messages})
  }

  render() {
    const { gameToken, gameState } = this.state;
    console.log(gameState)
    return (
      <div id="game-container">

        <div className="row" style={{minHeight: '50px'}}>
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
          </div> */}
        </div>
      </div>
    )
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
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
};
