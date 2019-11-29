import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

// shows fen input above customizable board and also shows play button
// pressing the play button goes to another page
class FenInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.goBack = this.goBack.bind(this);
  }

  handleSubmit = () => {
    this.setState({
      redirect: true
    });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const redirect = (
      <Redirect to={{
        pathname: '/analysis',
        state: { fen: this.props.fen, customPiece: this.props.customPiece }
      }} />
    );
    return (
      <div style={{ textAlign: 'center' }}>
        { this.state.redirect ? redirect : null }
        <form onSubmit={this.handleSubmit}>
          <Button type='submit'>Play</Button>
        </form>
        <input
          value={this.props.fen}
          name="fen"
          readOnly
          style={{ margin: '0.25em' }}
        >
        </input>
      </div>
    );
  }
}

export default FenInput;