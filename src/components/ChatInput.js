import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSendMessage } = this.props;
    const { text } = this.state;
    this.setState({
      text: '',
    });
    onSendMessage(text);
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={(e) => this.onSubmit(e)} data-testid="chat-input">
        <TextField
          data-testid="chat-input-field"
          placeholder="Chat with your opponent"
          margin="normal"
          variant="outlined"
          onChange={(e) => this.onChange(e)}
          value={text}
          fullWidth
        />
        <Button type="submit" data-testid="chat-input-submit-btn">Send</Button>
      </form>
    );
  }
}

export default ChatInput;
