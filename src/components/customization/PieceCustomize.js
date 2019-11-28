import React from 'react';

function PieceCustomize(props) {
  return (
    <div className="piece-customize">
      <div style={{ margin: '0.25em' }}>
        <div>
          <label>
            non-repeating offsets:<br/>
            <input type="text" onChange={props.onOffsetsChange} />
          </label>
        </div>
        <div>
          <label>
            repeating offsets:<br/>
            <input type="text" onChange={props.onRepeatOffsetsChange} />
          </label>
        </div>
      </div>
      <div className="diagram">
        <svg width="300" height="300">
          <rect x="144" y="144" width="11" height="11"/>
          <circle className="hint" cx="130" cy="130" r="6" />
          <circle className="hint" cx="110" cy="110" r="6" />
          <circle className="hint" cx="90" cy="90" r="6" />
          <circle className="hint" cx="70" cy="70" r="6" />
          <circle className="hint" cx="50" cy="50" r="6" />
          <circle className="hint" cx="30" cy="30" r="6" />
          <circle className="hint" cx="10" cy="10" r="6" />
        </svg>
      </div>
    </div>
  );
}

export default PieceCustomize;