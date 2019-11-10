import React, { Component } from 'react';
import {
  Nav, Navbar, Row, Col,
} from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import Image from 'react-bootstrap/Image';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import awsconfig from '../aws-exports';
import CreateGameDialog from './CreateGameDialog';
import Lobby from './Lobby';
import PopularVariants from '../components/PopularVariants';
import variant1 from '../Images/variant1.png';
import variant2 from '../Images/variant2.jpg';

Amplify.configure(awsconfig);
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
      username: '',
      showAuth: false,
      showDialog: false,
    };
  }

  handleShowAuth = (e) => {
    e.preventDefault();
    this.setState({
      showAuth: true,
    });
  }

  handleAuthStateChange = (state) => {
    if (state === 'signedIn') {
      const { username } = Auth.user;
      this.setState({
        showAuth: false,
        username,
      });
    }
  }

  handleSignOut = () => {
    Auth.signOut();
    this.setState({
      username: '',
    });
  }

  makeDialogVisible = () => {
    this.setState({ showDialog: true });
  }

  render() {
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

        <h1 className="text-center" style={{ fontFamily: 'AppleSDGothicNeo-Bold' }}>Popular Variants</h1>
        <Row>
          <Col className="text-center">
            <PopularVariants src={variant1} />
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
