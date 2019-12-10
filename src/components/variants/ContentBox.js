import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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

const ContentBox = ({ board, style, children }) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs="auto">
        <div>
          {board}
        </div>
      </Col>
      <Col xs="auto" xl="6" style={style}>
        {children}
      </Col>
    </Row>
  </Container>
);

export default ContentBox;

ContentBox.defaultProps = {
  style: [],
  children: [],
};

ContentBox.propTypes = {
  board: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.symbol, PropTypes.object],
  )).isRequired,
  style: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object, PropTypes.array],
  ),
};
