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

  validateFen = (fen) => {
    const position = fen.split(' ')[0];
    let white_kings = (position.match(/k/g) || []).length;
    let black_kings = (position.match(/K/g) || []).length;
    return white_kings === 1 && black_kings === 1;
  }

  play() {
    // redirect to analysis page and pass props that are accessible via props.location.state
    if (!this.validateFen(this.props.fen)) {
      const errorDiv = document.getElementById('play-err');
      errorDiv.innerHTML = "";
      const span = document.createElement('span');
      const text = document.createTextNode('In chess, both players must have one king each.');
      span.appendChild(text);
      errorDiv.appendChild(span);
      return;
    }
    let path = '/analysis';
    this.props.history.push({
      pathname: path,
      state: { fen: this.props.fen, customPiece: this.props.customPiece}
    });
  }

  render() {
    return (
      <div>
        <div id="play-err"> </div>
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