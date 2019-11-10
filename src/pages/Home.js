import React, { Component } from 'react';
import CreateGameDialog from './CreateGameDialog';
import Lobby from './Lobby';

const games = [
  {player: 'Magnus Carlsen', skillLevel: 'Expert', timing: '10+30', variant: 'Classic'},
  {player: 'Fabio', skillLevel: 'Beginner', timing: '10+30', variant: 'Crazyhouse'},
  {player: 'Gary Kasparov', skillLevel: 'Expert', timing: '10+30', variant: 'King of the hill'}, 
  {player: 'Ding Liren', skillLevel: 'Advanced', timing: '7+0', variant: 'Atomic'},
  {player: 'Max', skillLevel: 'Intermediate', timing: '10+30', variant: 'Horde'}

]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false
    };
  }

  makeDialogVisible = () => {
    this.setState({showDialog: true})
  }

  render() {
    return (
      <div>
        <CreateGameDialog 
          showDialog={this.state.showDialog}
        />
        <Lobby 
          games={games} 
          makeDialogVisible={this.makeDialogVisible} 
        />
      </div>
    );
  }
}

export default Home;
