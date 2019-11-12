import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CreateGameDialog from './CreateGameDialog';
import Lobby from './Lobby';
import PopularVariants from '../components/PopularVariants';
import AntiChess from '../Images/AntiChess.png';
import variant2 from '../Images/variant2.jpg';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';


const games = [
  {
    player: 'Magnus Carlsen', skillLevel: 'Expert', timing: '10+30', variant: 'Classic',
  },
  {
    player: 'Fabio', skillLevel: 'Beginner', timing: '10+30', variant: 'Crazyhouse',
  },
  {
    player: 'Gary Kasparov', skillLevel: 'Expert', timing: '10+30', variant: 'King of the hill',
  },
  {
    player: 'Ding Liren', skillLevel: 'Advanced', timing: '7+0', variant: 'Atomic',
  },
  {
    player: 'Max', skillLevel: 'Intermediate', timing: '10+30', variant: 'Horde',
  },

];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    };
  }

  makeDialogVisible = async () => {
    // this.setState({ showDialog: true });
    const data = {
      creator: 'xiaohong',
      variant: 'Anti Chess',
      started: false,
      white: 'xiaohong'
    }
    const newGame = await API.graphql(graphqlOperation(mutations.createGame, {input: data}));
    console.log('new game',newGame)
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

        <h1 className="text-center" style={{ fontFamily: 'AppleSDGothicNeo-Bold' }}>Popular Variants</h1>
        <Row>
          <Col className="text-center">
            <PopularVariants name="Anti Chess" src={AntiChess} description="Win by losing all your pieces or being stalemated" />
          </Col>
          <Col className="text-center">
            <PopularVariants src={variant2} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
