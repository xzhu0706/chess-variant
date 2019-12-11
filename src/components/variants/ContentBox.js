import React from 'react';
import { Row, Col } from 'react-bootstrap';

const _style = {
  backgroundColor: '#eee',
  width: '97%',
  padding: '0.75rem',
  borderBottom: '1px solid black',
};

const ContentBox = (props) => {
  return (
    <div style={_style}>
      <Row className="justify-content-md-center">
        <Col xs="auto">
          <div>
            {props.board}
          </div>
        </Col>
        <Col xs="auto" xl="6" style={props.style}>
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export default ContentBox;