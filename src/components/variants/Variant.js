import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Variant = ({ title, children }) => {
  const headingStyle = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const bodyStyle = {
    fontFamily: 'Lucida Bright, Lucidabright, Lucida Serif, Lucida,'
        + 'Bitstream Charter, Bitstream Vera Serif, DejaVu Serif, Century Schoolbook L,'
        + 'serif',
    fontSize: '100%',
    marginBottom: '1rem',
  };

  return (
    <Container>
      <h1 style={headingStyle}>
        Rules of
        {' '}
        {title}
      </h1>
      <Row xs={8}>
        <div>
          <div style={bodyStyle}>
            {children}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Variant;

Variant.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
