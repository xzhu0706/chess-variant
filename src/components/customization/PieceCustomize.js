import React from 'react';

function PieceCustomize(props) {
  // console.log(props.offsets);
  // console.log(props.repeatOffsets);

  /*
  (center is 150, 150)

  first row/column is 10
  second row/column is 30,
  ...
  last row/column is 290

  the offset -17 = -16 + -1 should give us -1 on the row and -1 on the column, i.e., (-20, -20)
  the offset -15 = -16 + +1 should give us +1 on the row and -1 on the column, i.e., (+20, -20)
  the offset 0 should give us no change in the row/column indexes, i.e., (0, 0)
  the offset +15 = +16 + -1 should give us +1 on the row and -1 on the column, i.e., (+20, -20)
  the offset +17 = +16 + +1 should give us +1 on the row and +1 on the column, i.e., (+20, +20)
  */

  let circles = [];

  /* I want circles to look like this:
  [
    <circle key="1" className="move" cx="150" cy="150" r="6" />,
    <circle key="2" className="move" cx="110" cy="10" r="6" />,
    <circle key="3" className="move" cx="90" cy="10" r="6" />,
    <circle key="4" className="move" cx="70" cy="10" r="6" />,
    <circle key="5" className="move" cx="50" cy="10" r="6" />,
    <circle key="6" className="move" cx="30" cy="10" r="6" />,
    <circle key="7" className="move" cx="10" cy="10" r="6" />
  ]
  */

  function createCircle(offset, index) {
    // calculate cx and cy from offset
    

    return <circle key={index} className="move" r="6"/>;
  }

  // for each offset, push circle (JSX element) to circles array
  props.offsets.forEach((element, index) => {
    circles.push(createCircle(element, index));
  });

  return (
    <div className="piece-customize">
      <div style={{ margin: '0.25em' }}>
        <div>
          <label>
            non-repeating offsets:<br/>
            <input type="text" onChange={props.onChangeOffsets} />
          </label>
        </div>
        <div>
          <label>
            repeating offsets:<br/>
            <input type="text" onChange={props.onChangeRepeatOffsets} />
          </label>
        </div>
      </div>
      <div className="move-diagram">
        <svg width="300" height="300">
          <rect x="144" y="144" width="11" height="11"/>
          {circles}
        </svg>
      </div>
    </div>
  );
}

export default PieceCustomize;