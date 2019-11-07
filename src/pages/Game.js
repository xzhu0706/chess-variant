import React, { Component } from "react";
import PropTypes from 'prop-types';
import WithMoveValidation from "../WithMoveValidation";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //const { match } = this.props;
    return (
      <div>
        Game Page
        { // why is this line giving me an error?
          // match.params.token
        }
        <div style={boardsContainer}>
          <WithMoveValidation />
        </div>
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

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};
