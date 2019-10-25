import React, { Component } from 'react';

class Game extends Component {
    state = {
        
    }
    render() {
        return (
            <div>Game Page {this.props.match.params.token}</div>
        );
    }
};

export default Game;
