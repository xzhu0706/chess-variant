import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        Game Page
        {match.params.token}
      </div>
    );
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
