import React, { Component } from 'react';
<<<<<<< HEAD
import { Nav, Navbar } from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import Image from 'react-bootstrap/Image';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import awsconfig from '../aws-exports';
import CreateGameDialog from './CreateGameDialog';
import Lobby from './Lobby';
=======
import { Row, Col } from 'react-bootstrap';
import CreateGameDialog from './CreateGameDialog';
import Lobby from './Lobby';
import PopularVariants from '../components/PopularVariants';
import AntiChess from '../Images/AntiChess.png';
import variant2 from '../Images/variant2.jpg';
>>>>>>> upstream/master

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
<<<<<<< HEAD
      username: '',
      showAuth: false,
      showDialog: false,
=======
      showDialog: false
>>>>>>> upstream/master
    };
  }

  makeDialogVisible = () => {
    this.setState({ showDialog: true });
  }

  render() {
<<<<<<< HEAD
    const imgStyle = {
      width: '2em',
      height: '2em',
    };
    const { username, showAuth } = this.state;
    const lobby = !showAuth ? <Lobby games={games} makeDialogVisible={this.makeDialogVisible} /> : '';
    return (
      <div>
        <Navbar style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: 'black' }} bg="black" variant="light">
          <Navbar.Brand style={{ fontFamily: 'chalkduster' }}>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Glinski_Chess_Setup.png" alt="Chess Piece" style={imgStyle} fluid />
            <a style={{ color: '#333333', fontSize: '28px', marginLeft: '5px' }} href="/">Chess Variants</a>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Explore Variants</Nav.Link>
            <Nav.Link href="#home">Learn</Nav.Link>
            <Nav.Link href="#features">Leaderboard</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>

            {username
              ? (
                <Nav className="ml-auto">
                  <Nav.Link>
                  Hello
                    {' '}
                    {username}
                  </Nav.Link>
                  <Nav.Link>
                    <Button onClick={this.handleSignOut}>Sign Out</Button>
                  </Nav.Link>
                </Nav>
              )
              : (
                <Nav className="ml-auto">
                  <Button
                    style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#333333', height: '35px' }}
                    variant="outlined"
                    color="#333333"
                    startIcon={<AccountCircle />}
                    onClick={this.handleShowAuth}
                  >
                    SIGN IN
                  </Button>
                  {/* <Button style={{ backgroundColor: "white", color: "black" }} className="float-right" onClick={this.handleShowAuth}>Sign In</Button> */}
                </Nav>
              )}

          </Nav>


        </Navbar>
        <Authenticator
          hideDefault={!showAuth}
          hide={[Greetings]}
          onStateChange={this.handleAuthStateChange}
        />
        <CreateGameDialog showDialog={this.state.showDialog} />
        {lobby}
=======
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
>>>>>>> upstream/master
      </div>
    );
  }
}

export default Home;
