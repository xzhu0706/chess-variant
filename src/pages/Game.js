import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
  render() {
    return (
      <div className="App">
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
