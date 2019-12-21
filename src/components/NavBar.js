import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
// import './NavBar.css';
import { colorForLetter } from '../Utils/ColorForLetter';
import * as Colors from '../Constants/Colors';
import * as customQueries from '../customGraphql/queries';
import PopupButton from './PopupButton';
import awsconfig from '../aws-exports';
import SearchUsersTextField from './SearchUsersTextField';
import { NAVBAR_COLLAPSE_BREAKPOINT } from '../Constants/NavbarConstants';
// import { isMainThread } from 'worker_threads';

Amplify.configure(awsconfig);

const PROFILE = 'Profile';
const ADMIN = 'Admin';
const SIGNOUT = 'Sign Out';
const PROFILE_INDEX = 0;
const ADMIN_INDEX = 1;
const LogoutButtonPopperOptions = { [PROFILE]: true, [ADMIN]: false, [SIGNOUT]: true };

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showAuth: false,
      isAdmin: false,
      showLogoutButtonPopper: false,
      showSearchUsersTextfieldPopper: false,
      searchResults: [],
      collapsed: window.innerWidth < NAVBAR_COLLAPSE_BREAKPOINT,
    };
    this.logoutButtonAnchorEl = null;
    this.searchUsersTextfieldAnchorEl = null;
  }

  async componentDidMount() {
    window.addEventListener('resize', this.setCollapseState);
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.setCollapseState);
  }

  onNavbarToggle(e) {
    console.log('TOGGLED!');
  }

  setCollapseState = (e) => {
    const width = e.target.outerWidth;
    if (width < NAVBAR_COLLAPSE_BREAKPOINT) this.setState({ collapsed: true });
    else this.setState({ collapsed: false });
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
      window.location.reload();
    }
  }

  handleSignOut = () => {
    Auth.signOut().then(() => {
      this.setState({
        username: '',
        isAdmin: false,
      });
      window.location.reload();
    });
  }

  handleSearch = async (e) => {
    if (this.searchUsersTextfieldAnchorEl === null) this.searchUsersTextfieldAnchorEl = e.target;
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
        showSearchUsersTextfieldPopper: true,
      });
    } else {
      this.setState({
        showSearchUsersTextfieldPopper: false,
        searchResults: [],
      });
    }
  }

  linkToUser = (e, val) => {
    const { history } = this.props;
    this.dismissSearchUsersTextFieldPopper();
    if (val) {
      history.push(`/account/${val.username}`);
    }
  }

  toggleLogoutButtonPopper = (e) => {
    const { showLogoutButtonPopper } = this.state;
    if (this.logoutButtonAnchorEl === null) this.logoutButtonAnchorEl = e.target;
    this.setState({ showLogoutButtonPopper: !showLogoutButtonPopper });
  }

  toggleOffLogoutButtonPopper = () => {
    this.setState({ showLogoutButtonPopper: false });
  }

  handleLogoutButtonPopperSelection = (event, selectedIndex) => {
    const { username } = this.state;
    this.setState({ showLogoutButtonPopper: false });
    switch (selectedIndex) {
    case PROFILE_INDEX:
      username !== '' && this.props.history.push(`/account/${username}`);
      break;
    case ADMIN_INDEX:
      username !== '' && this.props.history.push('/admin');
      break;
    default:
      this.handleSignOut();
      break;
    }
  }

  dismissSearchUsersTextFieldPopper = (e) => {
    this.setState({ showSearchUsersTextfieldPopper: false });
  }

  render() {
    const imgStyle = {
      width: '4em',
      height: '4em',
      marginBottom: '20px',
    };
    const {
      username, showAuth, isAdmin, showLogoutButtonPopper, searchResults, showSearchUsersTextfieldPopper, collapsed,
    } = this.state;
    const {
      handleShowAuth, handleCloseAuth, handleAuthStateChange,
    } = this;
    if (isAdmin) LogoutButtonPopperOptions[ADMIN] = true;
    const loggedIn = (
      <Nav.Item>
        <PopupButton
          options={LogoutButtonPopperOptions}
          backgroundColor={colorForLetter(username.charAt(0).toUpperCase())}
          handleMenuItemClick={this.handleLogoutButtonPopperSelection}
          handleToggle={this.toggleLogoutButtonPopper}
          open={showLogoutButtonPopper}
          username={username}
          anchorEl={this.logoutButtonAnchorEl}
          toggleOff={this.toggleOffLogoutButtonPopper}
          startIcon={<AccountCircle />}
        />
      </Nav.Item>
    );

    const loggedOut = (
      <Nav.Item>
        <Button
          data-testid="login-button"
          style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.ROYAL_BLUE, height: 'auto' }}
          variant="outlined"
          color="primary"
          startIcon={<AccountCircle />}
          onClick={handleShowAuth}
        >
SIGN IN
        </Button>
      </Nav.Item>
    );

    return (
      <span>
        <Navbar
          onToggle={this.onNavbarToggle}
          collapseOnSelect
          expand="lg"
          style={{
            fontWeight: 'semi-bold',
            boxShadow: '0px 3px 3px lightGray',
          }}
          variant="light"
          bg="white"
          fixed="top"
        >
          <Navbar.Brand style={{
            fontFamily: 'chalkduster',
            display: 'flex',
            height: '50px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Chess_pWlt26.svg"
              alt="Chess Piece"
              style={imgStyle}
              fluid
            />
            <Link to="/" style={{ marginLeft: '-10px', fontSize: '25px' }}>Chess Variants</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <SearchUsersTextField
                options={searchResults}
                handleMenuItemClick={this.linkToUser}
                onChange={this.handleSearch}
                open={showSearchUsersTextfieldPopper}
                dismissPopper={this.dismissSearchUsersTextFieldPopper}
                width={window.innerWidth * 1 / 3}
                anchorEl={this.searchUsersTextfieldAnchorEl}
              />
            </Nav>
            <Nav>
              <Link to="/"><Nav.Item className="nav-link">Home</Nav.Item></Link>
              <Link to="/variants"><Nav.Item className="nav-link">Variants</Nav.Item></Link>
              <Link to="/create"><Nav.Item className="nav-link">Create</Nav.Item></Link>
              {collapsed && <Link to="/"><Nav.Item className="nav-link">Home</Nav.Item></Link>}
              <Link to="/about"><Nav.Item className="nav-link">About</Nav.Item></Link>
              {username ? loggedIn : loggedOut}
            </Nav>
          </Navbar.Collapse>
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
