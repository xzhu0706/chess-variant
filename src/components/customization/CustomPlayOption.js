import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

// shows a FEN field above the board and a play button
// pressing the play button goes to another page (that we pass props)

class CustomPlayOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  validateFen = (fen) => {
    const position = fen.split(' ')[0];
    const whiteKings = (position.match(/k/g) || []).length;
    const blackKings = (position.match(/K/g) || []).length;
    return whiteKings === 1 && blackKings === 1;
  }

  play() {
    // redirect to analysis page and pass props that are accessible via props.location.state
    const { fen, history, customPiece } = this.props;
    if (!this.validateFen(fen)) {
      const errorDiv = document.getElementById('play-err');
      errorDiv.innerHTML = '';
      const span = document.createElement('span');
      const text = document.createTextNode('In chess, both players must have one king each.');
      span.appendChild(text);
      errorDiv.appendChild(span);
      return;
    }
    const path = '/analysis';
    history.push({
      pathname: path,
      state: { fen, customPiece },
    });
  }

  render() {
    const { fen } = this.props;
    return (
      <div>
        <div id="play-err"> </div>
        <Button variant="contained" color="primary" onClick={() => this.play()}>
          Analyse
        </Button>
        <input
          value={fen}
          name="fen"
          readOnly
          style={{ margin: '0.25em' }}
        />
      </div>
    );
  }
}

export default withRouter(CustomPlayOption);
