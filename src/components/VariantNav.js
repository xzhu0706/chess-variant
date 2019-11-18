import React from 'react';
import Tab from 'react-bootstrap/Tab';
import {
  Nav, Row, Col,
} from 'react-bootstrap';
import AntiChess from './variants/AntiChess';
import GridChess from './variants/GridChess';

function VariantNav() {
  return (
    <Tab.Container id="Variant-Doc" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Antichess</Nav.Link>
              <Nav.Link eventKey="link-2">Grid chess</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
          <Tab.Pane eventKey="link-1">
              <AntiChess />
            </Tab.Pane>
            <Tab.Pane eventKey="link-2">
              <GridChess />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default VariantNav;
