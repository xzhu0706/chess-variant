import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

// shows a FEN field above the board and a play button
// pressing the play button goes to another page (that we pass props)

class CustomPlayOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleSubmit = () => {
    this.setState({
      redirect: true
    });
  }

  play() {
    // redirect to analysis page and pass props that are accessible via props.location.state
    let path = '/analysis';
    this.props.history.push({
      pathname: path,
      state: { fen: this.props.fen, customPiece: this.props.customPiece}
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => this.play()}>
          Play
        </Button>
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

export default withRouter(CustomPlayOption);