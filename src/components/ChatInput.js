import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ChatInput extends Component {
  state = {
    text: '',
  }

  onChange(e) {
	  this.setState({
      text: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      text: '',
    });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} data-testid="chat-input">
        <TextField
          data-testid="chat-input-field"
          placeholder='Chat with your opponent'
          margin='normal'
          variant='outlined'
          onChange={e => this.onChange(e)}
          value={this.state.text}
          fullWidth
        />
        <Button type='submit' data-testid="chat-input-submit-btn">Send</Button>
      </form>
    );
  }
}

export default ChatInput;
