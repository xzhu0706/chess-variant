import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const _style = {
  backgroundColor: '#eee',
  width: '97%',
  padding: '0.75rem',
  borderBottom: '1px solid black',
};

const ContentBox = ({ board, style, children }) => (
  <div style={_style}>
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
  </div>
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
