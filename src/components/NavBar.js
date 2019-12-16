import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Image from 'react-bootstrap/Image';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
//import './NavBar.css';
import * as customQueries from '../customGraphql/queries';
import PopupButton from './PopupButton';
import awsconfig from '../aws-exports';
import { isMainThread } from 'worker_threads';

Amplify.configure(awsconfig);

const PROFILE = 0
const ADMIN = 1
const LOGOUT = 2
const LogoutButtonPopperOptions = [{'profile': true}, {'Admin': false}, {'Log out': true}]

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showAuth: false,
      isAdmin: false,
      showLogoutButtonPopper: false
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
    } else {
      this.setState({
        searchResults: [],
      });
    }
  }

  linkToUser = (e, val) => {
    const { history } = this.props;
    if (val) {
      history.push(`/account/${val.username}`);
    }
  }

  toggleLogoutButtonPopper = () => {
    this.setState({showLogoutButtonPopper: !this.state.showLogoutButtonPopper})
  }

  handleLogoutButtonPopperSelection = (selectedIndex) => {

  }

  render() {
    const imgStyle = {
      width: '3em',
      height: '3em',
      marginBottom: '20px',
    };
    const {username, showAuth, isAdmin, searchResults,} = this.state;
    const {handleShowAuth, handleCloseAuth, handleAuthStateChange, handleSignOut,} = this;
    if(isAdmin)
      LogoutButtonPopperOptions[Admin]['Admin'] = true;
    const loggedIn = (
      <Nav.Link href={`/account/${username}`}>
        <PopupButton
          options = {LogoutButtonPopperOptions} 
          handleMenuItemClick = {this.handleLogoutButtonPopperSelection}
        />
      </Nav.Link>
    )
      {/*<span>
        <Nav.Link href={`/account/${username}`}> Hello{' '}{username}</Nav.Link>
        {isAdmin && (
          <Nav.Link href="/admin">Admin</Nav.Link>
        )}
        <Button
          onClick={handleSignOut}
          data-testid="logout-button"
          >Sign Out
        </Button>
        </span>}
      )*/}
    const loggedOut = (
        <Button
          data-testid="login-button"
          style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#333333', height: '35px' }}
          variant="outlined"
          startIcon={<AccountCircle />}
          onClick={handleShowAuth}
          color="primary"
          >SIGN IN
        </Button>
    )
      
    return (
      <span>
        <Navbar style={{height:'65px', boxShadow: '0px 3px 3px lightGray'}}variant='light' bg='white' fixed='top'>
          <Navbar.Brand style={{
            fontFamily: 'chalkduster',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}
            >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Chess_pWlt26.svg" alt="Chess Piece" style={imgStyle} fluid />
            <Link to="/" style={{fontSize: '25px'}}>Chess Variants</Link>
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Autocomplete
              
              style={{ width: 300 }}
              getOptionLabel={(option) => option.username}
              noOptionsText="No user found"
              options={searchResults}
              onChange={this.linkToUser}
              onInputChange={this.handleSearch}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ backgroundColor: 'rgb(250, 250, 250)' }}
                  variant='outlined'
                  id="outlined-margin-dense"
                  margin='dense'
                  placeholder="Search for Users"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/variants">List of Variants</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {username ? loggedIn : loggedOut}
          </Nav>
        </Navbar>
        <Dialog onClose={handleCloseAuth} aria-labelledby="simple-dialog-title" open={showAuth}>
          <Authenticator
            hideDefault={!showAuth}
            hide={[Greetings]}
            onStateChange={handleAuthStateChange}
          />
        </Dialog>
      </span>
    );
  }
}

export default withRouter(NavBar);
