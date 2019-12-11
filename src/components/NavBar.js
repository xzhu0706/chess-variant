import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import * as queries from '../graphql/queries';
import './NavBar.css';
import * as customQueries from '../customGraphql/queries';

import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showAuth: false,
      isAdmin: false,
    };
  }

  async componentDidMount() {
    try {
      const user = await Auth.currentUserPoolUser();
      if (user) {
        const groups = user.signInUserSession.idToken.payload['cognito:groups'];
        this.setState({
          username: user.username,
          isAdmin: groups && groups[0] === 'Admin',
        });
      }
    } catch (e) {
      console.log(e);
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
      const groups = Auth.user.signInUserSession.idToken.payload['cognito:groups'];
      this.setState({
        showAuth: false,
        username,
        isAdmin: groups && groups[0] === 'Admin',
      });
    }
  }

  handleSignOut = () => {
    Auth.signOut().then(() => {
      this.setState({
        username: '',
        isAdmin: false,
      });
    });
  }

  handleSearch = async (e) => {
    // not necessary because you overwrite searchResults anyway
    // clear the search results each time the search input is updated
    // this.setState({
    //   searchResults: [],
    // });
    const input = e.target.value;
    // start searching after 2 characters input
    if (input.length > 2) {
      const filter = {
        username: {
          contains: input,
        },
      };
      const queryResult = await API.graphql(graphqlOperation(customQueries.listUsers, { filter }));
      this.setState({
        searchResults: queryResult.data.listUsers.items,
      });
    }
  }

  linkToUser = (e, val) => {
    if (val) {
      this.props.history.push(`/account/${val.username}`);
    }
  }

  render() {
    const imgStyle = {
      width: '2em',
      height: '2em',
    };
    const {
      username, showAuth, isAdmin, searchResults,
    } = this.state;
    const {
      handleShowAuth, handleCloseAuth, handleAuthStateChange, handleSignOut,
    } = this;
    return (
      <div>
        <ResponsiveMenu
          menuOpenButton={<FaBars size={45} style={{ marginBottom: '1rem' }} />}
          menuCloseButton={<FaTimes size={45} />}
          changeMenuOn="820px"
          menu={(
            <div className="site-menu">
              <Navbar.Brand style={{ fontFamily: 'chalkduster', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image src={'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chess_pWlt26.svg'} alt="Chess Piece" style={imgStyle} fluid />
                <Link to="/" style={{ fontSize: '25px' }}>Chess Variants</Link>
              </Navbar.Brand>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/variants">List of Variants</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                {username
                  ? (
                    <span>
                      <li>
                        <Link to={`/account/${username}`}>
                          Hello
                          {' '}
                          {username}
                        </Link>
                      </li>
                      {isAdmin && (
                        <li>
                          <Link to="/admin">
                            Admin
                          </Link>
                        </li>
                      )}
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
                        color="primary"
                      >
                        SIGN IN
                      </Button>
                    </li>
                  )}
                <li>
                  <Autocomplete
                    className="d-inline-block"
                    id="search-bar"
                    style={{ width: 250 }}
                    getOptionLabel={(option) => option.username}
                    noOptionsText="No user found"
                    options={searchResults}
                    onChange={this.linkToUser}
                    onInputChange={this.handleSearch}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search a User"
                        fullWidth
                      />
                    )}
                  />
                </li>
              </ul>
            </div>
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
