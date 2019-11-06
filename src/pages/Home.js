import React, { Component } from 'react';
import {
  Row, Col, Button, Image, Container, Table,
} from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
// import { Authenticator, Greetings } from 'aws-amplify-react';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

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
    const descripList = [
      { description: 'Design your own variants', key: 0 },
      { description: 'Test your variant against others', key: 1 },
      { description: 'Play variants created from other players', key: 2 },
    ];

    const imgStyle = {
      width: '15em',
      height: '15em',
    };

    const top = {
      background: '#efd5be',
    };

    const white = {
      background: '#ecdfd3',
    };

    const rowStyle = {
      marginTop: '.5em',
      marginBottom: '1em',
    };

    const { username, showAuth } = this.state;

    return (
      <div style={top}>
        <Container>
          <div>
            {/* <Navbar style={top}>
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
            </Navbar> */}

            {/* <Authenticator
              hideDefault={!showAuth}
              hide={[Greetings]}
              onStateChange={this.handleAuthStateChange}
            /> */}

            {!showAuth && (
              <div style={white}>
                <Row style={rowStyle}>
                  <Col>
                    <div className="col">
                      <h1>Welcome to Chess-Variants</h1>
                      <ul>
                        {descripList.map((description) => (
                          <li key={description.key}>{description.description}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col className="text-center">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Glinski_Chess_Setup.png" alt="Chess Piece" style={imgStyle} fluid />
                  </Col>
                </Row>
                <Row style={rowStyle}>
                  <Col className="text-center">
                    <Button variant="info" size="lg">Play Now</Button>
                  </Col>
                  <Col className="text-center">
                    <Button variant="info" size="lg">Create Variant</Button>
                  </Col>
                </Row>
                <Row style={rowStyle}>
                  <Col className="text-center">
                    <Image src="https://user-images.githubusercontent.com/45343196/68171724-ee277b00-ff42-11e9-99c5-4443583046ed.png" alt="Base Variant" />
                  </Col>
                  <Col className="text-center">
                    <Image src="https://user-images.githubusercontent.com/45343196/68171724-ee277b00-ff42-11e9-99c5-4443583046ed.png" alt="Base Variant" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Table striped bordered hover variant="light" size="sm">
                      <thead>
                        <tr>
                          <th>Room #</th>
                          <th>Variant Type</th>
                          <th>Player</th>
                        </tr>
                      </thead>
                    </Table>
                  </Col>
                  <Col>
                    <Table striped bordered hover variant="light" size="sm">
                      <thead>
                        <tr>
                          <th>Room #</th>
                          <th>Variant Type</th>
                          <th>Player</th>
                        </tr>
                      </thead>
                    </Table>
                  </Col>
                </Row>

              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
