import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

function PopularVariant({ src }) {
  return (
    <div>
      <h3>Name of variant</h3>
      <Image src={src} alt="Variant" width={400} height={400} />
      <p>Description</p>
    </div>
  );
}

PopularVariant.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PopularVariant;
