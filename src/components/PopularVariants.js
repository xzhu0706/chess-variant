import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


function PopularVariant({ src, name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <Link to="/variants">
        <Image src={src} alt="Variant" width={400} height={400} />
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default PopularVariant;
