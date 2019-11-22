import React from 'react';

const Variant = (props) => {
  const headingStyle = {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
    };
  
    const bodyStyle = {
      fontFamily: "Lucida Bright, Lucidabright, Lucida Serif, Lucida," +
        "Bitstream Charter, Bitstream Vera Serif, DejaVu Serif, Century Schoolbook L," +
        "serif",
      fontSize: "100%",
      marginBottom: "1rem"
    };

  return (
    <div>
      <h1 className="text-center" style={headingStyle}>{props.title}</h1>
      <div>
        <h2 style={headingStyle}>Pieces</h2>
        {props.piecesTable}
      </div>
      <div>
        <h2 style={headingStyle}>Rules</h2>
        <div style={bodyStyle}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Variant;