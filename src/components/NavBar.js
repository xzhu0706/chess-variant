import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components'; // https://www.styled-components.com/
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';

import awsconfig from '../aws-exports';

const icon = require('../pieces/standard/wr.svg');

Amplify.configure(awsconfig);

const Menu = styled.div`
  border: 2px solid black;
  margin: 1em 2em;

  ul {
    padding: 0;
  }

  li { 
    display: inline;
    list-style-type: none;
    margin-left: 25px;
  }

  a {
    font-size: 18px;
    color: Black;

    &:hover {
      color: DodgerBlue;
    }
  }

  @media (max-width: 820px) {
    padding: 10px 10px;
    li {
      display: block;
      margin-left: 0;
    }
  }
`;

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
          menuOpenButton={<FaBars size={40} color="YellowGreen" />}
          menuCloseButton={<FaTimes size={40} color="YellowGreen" />}
          changeMenuOn="820px"
          menu={(
            <Menu>
              <Navbar.Brand style={{ fontFamily: 'chalkduster' }}>
                <Image src={icon} alt="Chess Piece" style={imgStyle} fluid />
                <Link to="/" style={{ color: '#333333', fontSize: '28px' }}>Chess Variants</Link>
              </Navbar.Brand>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/variants">Browse Variants</Link>
                </li>
                <li>
                  <Link to="/">Leaderboard</Link>
                </li>
                <li>
                  <Link to="/">Analysis Board</Link>
                </li>

                {username
                  ? (
                    <span>
                      <li>
                        <Link to="/account">
                          Hello
                          {' '}
                          {username}
                        </Link>
                      </li>
                      <li>
                        <Button
                          onClick={handleSignOut}
                          data-testid="logout-button"
                        >
                        Sign Out
                        </Button>
                      </li>
                    </span>
                  )
                  : (
                    <li>
                      <Button
                        data-testid="login-button"
                        style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#333333', height: '35px' }}
                        variant="outlined"
                        startIcon={<AccountCircle />}
                        onClick={handleShowAuth}
                      >
                        SIGN IN
                      </Button>
                    </li>
                  )}
              </ul>
            </Menu>
          )}
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
