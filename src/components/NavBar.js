import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components'; // https://www.styled-components.com/
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

import Autocomplete from '@material-ui/lab/Autocomplete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import * as queries from '../graphql/queries';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';



import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Menu = styled.div`
  border: 0px solid black;
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
    // clear the search results each time the search input is updated
    this.setState({
      searchResults: [],
    });
    const input = e.target.value;
    // start searching after 2 characters input
    if (input.length > 2) {
      const filter = {
        username: {
          contains: input,
        },
      };
      const queryResult = await API.graphql(graphqlOperation(queries.listUsers, { filter }));
      this.setState({
        searchResults: queryResult.data.listUsers.items,
      });
      console.log(queryResult.data.listUsers.items);
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
            <Navbar style={{color: 'white', boxShadow: '0px 3px 3px lightGray'}} variant='light' bg='white' fixed='top'>
              <Navbar.Brand style={{ fontFamily: 'chalkduster' }}>
              <Image src={require('../icons/pieces/standard/wr.svg')} alt="Chess Piece" style={imgStyle} fluid />
                <Link to="/" style={{ color: '#333333', fontSize: '28px' }}>Chess Variants</Link>
              </Navbar.Brand>
              <Nav className='mr-auto'>
              <Autocomplete
                    className="d-inline-block"
                    id="search-bar"
                    style={{height: 25, padding: '-5 -5 -5 -5', width: 600}}
                    getOptionLabel={(option) => option.username}
                    noOptionsText="No user found"
                    options={searchResults}
                    onChange={this.linkToUser}
                    onInputChange={this.handleSearch}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        style={{marginTop: '-20px', height: 20, backgroundColor:'rgb(250, 250, 250)'}}
                        variant='outlined'
                        id="outlined-margin-dense"
                        margin='dense'
                        placeholder="Search a User"
                        fullWidth
                    
                      />
                    )}
                  />
              </Nav>
                {username
                  ? (
                    <Nav>
                      <Nav.Link href=''>hello</Nav.Link>
                      {isAdmin && ( 
                        <Nav.Link href="/admin">Admin</Nav.Link>
                      )}
                      <Button
                        onClick={handleSignOut}
                        data-testid="logout-button"
                      >Sign Out</Button>
                    </Nav>
                    )
                  : (
                      <Button
                        data-testid="login-button"
                        style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#333333', height: '35px' }}
                        variant="outlined"
                        startIcon={<AccountCircle />}
                        onClick={handleShowAuth}
                      >SIGN IN</Button>
                  )
                }
              </Navbar>

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
