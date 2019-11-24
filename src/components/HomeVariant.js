import React from 'react';

function HomeVariant() {
  const headingStyle = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
  };
  const bodyStyle = {
    fontFamily: 'Lucida Bright, Lucidabright, Lucida Serif, Lucida,'
          + 'Bitstream Charter, Bitstream Vera Serif, DejaVu Serif, Century Schoolbook L,'
          + 'serif',
    fontSize: '110%',
  };
  return (
    <div>
      <h1 className="text-center" style={headingStyle}>Chess Variants</h1>
      <br />
      <p style={bodyStyle}>
        Chess variants provides a new way of playing chess. Learn new variants and
        strategies and think outside of the box
      </p>
    </div>
  );
}

export default HomeVariant;
