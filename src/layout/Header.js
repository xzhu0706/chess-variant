import React from 'react';
import {
  Navbar,
} from 'react-bootstrap';

import Authentication from './Authentication';

const headerStyle = {
  padding: '10px',
  color: 'red',
};

function Header() {
  return (
    <div style={headerStyle}>
      <Navbar>
        <Navbar.Brand href="/">
                Chess-Variant.com
        </Navbar.Brand>
        {/* {username
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
                )} */}

        <Authentication />

      </Navbar>
    </div>
  );
}

export default Header;
