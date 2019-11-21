import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components'; // https://www.styled-components.com/
import { FaBeer } from 'react-icons/fa';
import { Authenticator, Greetings } from 'aws-amplify-react';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showAuth: false,
    };
  }

  async componentDidMount() {
    const user = await Auth.currentUserInfo();
    if (user) {
      this.setState({
        username: user.username,
      });
    }
  }

  handleShowAuth = () => {
    this.setState({
      showAuth: true,
    });
  }

  handleCloseAuth = () => {
    this.setState({
      showAuth: false,
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
    Auth.signOut().then(() => {
      this.setState({
        username: '',
      });
    });
  }

  render() {
    const imgStyle = {
      width: '2em',
      height: '2em',
    };
    const { username, showAuth } = this.state;
    const {
      handleShowAuth, handleCloseAuth, handleAuthStateChange, handleSignOut,
    } = this;
    return (
      <div>
        <ResponsiveMenu
          menuOpenButton={<FaBeer size={30} color="YellowGreen" />}
          menuCloseButton={<FaBeer size={30} color="YellowGreen" />}
          changeMenuOn="640px"
          menu={
            <Navbar style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: 'black' }} bg="black" variant="light">
              <Navbar.Brand style={{ fontFamily: 'chalkduster' }}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Glinski_Chess_Setup.png" alt="Chess Piece" style={imgStyle} fluid />
                <Link to="/" style={{ color: '#333333', fontSize: '28px', marginLeft: '5px' }}>Chess Variants</Link>
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Link to="/variants"><Nav.Item className="nav-link">Explore Variants</Nav.Item></Link>
                <Link to=""><Nav.Item className="nav-link">Learn</Nav.Item></Link>
                <Link to=""><Nav.Item className="nav-link">Leaderboard</Nav.Item></Link>
                
                {username
                  ? (
                    <Nav className="ml-auto">
                      <Link to="/account">
                        <Nav.Item className="nav-link">
                          Hello
                          {' '}
                          {username}
                        </Nav.Item>
                      </Link>
                      <Nav.Item>
                        <Button onClick={handleSignOut} data-testid="logout-button">Sign Out</Button>
                      </Nav.Item>
                    </Nav>
                  )
                  : (
                    <Nav className="ml-auto">
                      <Button
                        data-testid="login-button"
                        style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#333333', height: '35px' }}
                        variant="outlined"
                        startIcon={<AccountCircle />}
                        onClick={handleShowAuth}
                      >
                        SIGN IN
                      </Button>
                    </Nav>
                  )}
              </Nav>
            </Navbar>
          }
        />

        <Dialog onClose={handleCloseAuth} aria-labelledby="simple-dialog-title" open={showAuth}>
          <Authenticator
            hideDefault={!showAuth}
            hide={[Greetings]}
            onStateChange={handleAuthStateChange}
          />
        </Dialog>
      </div>
    );
  }
}

export default withRouter(NavBar);
