import React, { Component } from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import awsconfig from '../aws-exports';
import Welcome from './Welcome';
import Lobby from './Lobby';

Amplify.configure(awsconfig);
const games = [
  {player: 'Magnus Carlsen', skillLevel: 'Expert', timing: '10+30', variant: 'Classic'},
  {player: 'Fabio', skillLevel: 'Beginner', timing: '10+30', variant: 'Crazyhouse'},
  {player: 'Gary Kasparov', skillLevel: 'Expert', timing: '10+30', variant: 'King of the hill'}, 
  {player: 'Ding Liren', skillLevel: 'Advanced', timing: '7+0', variant: 'Atomic'},
  {player: 'Max', skillLevel: 'Intermediate', timing: '10+30', variant: 'Horde'}

]

const descripList = [
  { description: 'Design your own variants', key: 0 },
  { description: 'Test your variant against others', key: 1 },
  { description: 'Play variants created from other players', key: 2 },
];


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showAuth: false,
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

  render() {
    const top = {
      background: '#efd5be',
    }; 
    const { username, showAuth } = this.state;
    const welcome = !showAuth? <Welcome descripList = {descripList}/> : ''
    const lobby = !showAuth? <Lobby games = {games} /> : ''
    return (
      <div>
        <Navbar style={top}>
          <Navbar.Brand href="/">
            Chess-Variant.com
          </Navbar.Brand>
          {username
            ? (
              <Nav className="ml-auto">
                <Nav.Link>
                  Hello
                  {' '}
                  {username}
                </Nav.Link>
                <Nav.Link>
                  <Button className="float-right" variant="danger" onClick={this.handleSignOut}>Sign Out</Button>
                </Nav.Link>
              </Nav>
            )
            : (
              <Nav className="ml-auto">
                <Button className="float-right" variant="primary" onClick={this.handleShowAuth}>Sign In</Button>
              </Nav>
            )}
          </Navbar>
        <Authenticator
          hideDefault={!showAuth}
          hide={[Greetings]}
          onStateChange={this.handleAuthStateChange}
        />
        {lobby}
        {welcome}
      </div>
    );
  }
}

export default Home;
