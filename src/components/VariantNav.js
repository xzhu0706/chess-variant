import React from 'react';
import Tab from 'react-bootstrap/Tab';
import {
  Nav, Row, Col,
} from 'react-bootstrap';

function VariantNav() {
  return (
    <Tab.Container id="Variant-Doc" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Anti Chess</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                Anti Chess Description
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                Variant Description
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default VariantNav;
