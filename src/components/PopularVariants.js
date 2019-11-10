import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

function PopularVariant({ src, name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <Image src={src} alt="Variant" width={400} height={400} />
      <p>{description}</p>
    </div>
  );
}

PopularVariant.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PopularVariant;
