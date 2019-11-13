import React from 'react';
import Tab from 'react-bootstrap/Tab';
import {
  Nav, Row, Col,
} from 'react-bootstrap';
import AntiChess from './AntiChess';

function VariantNav() {
  return (
    <Tab.Container id="Variant-Doc" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Antichess</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <AntiChess />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default VariantNav;
