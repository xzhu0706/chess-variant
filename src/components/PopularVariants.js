import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PopularVariant({
  src, name, description, link,
}) {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/variants/${link}`}>
        <Image src={src} alt="Variant" width={400} height={400} />
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default PopularVariant;

PopularVariant.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
