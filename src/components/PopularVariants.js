import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function PopularVariant({ src, name, description }) {
  return (
    <Router>
      <div>
        <h3>{name}</h3>
        <Link to="/variants">
          <Image src={src} alt="Variant" width={400} height={400} />
        </Link>
        <p>{description}</p>
      </div>
    </Router>
  );
}

PopularVariant.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PopularVariant;
