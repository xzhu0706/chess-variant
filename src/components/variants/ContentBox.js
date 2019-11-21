import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #fcf9f7;
  border: 1px solid black;
  width: 97%;
  padding: 2%;
  margin: 5px;

  @media (max-width: 600px) {
    margin: 12px auto;
    color: black;
  }
`;

const ContentBox = (props) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ContentBox;