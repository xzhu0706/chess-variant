import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
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
        username: 'default user',
      },
      gameToken: '',
    };
  }

  async componentDidMount() {
    const user = await Auth.currentUserInfo();
    if (!user) {
      console.log('not logged in');
      return;
    }
    const { match } = this.props;
    this.setState({
      currentUser: {
        username: user.username,
      },
      gameToken: match.params.token,
    });
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
    return (
      <div className="container">

        <div className="row" style={{minHeight: '50px'}}>
        {
          
        }
        </div>

        <div className="row">
          <div style={boardsContainer} className="col-sm">
            <WithMoveValidation />
          </div>

          <div className="col-sm chat-box">
            <ChatMessages
              messages={this.state.messages}
              currentMember={this.state.currentUser}
            />
            <ChatInput
              onSendMessage={this.onSendMessage}
            />
          </div>
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
