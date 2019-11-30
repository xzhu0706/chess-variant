import React from 'react';
import Countdown from 'react-countdown-now';

const clockStyle = {
  fontSize: '30px',
};

function Clock({ time, color }) {
  return (
    <div style={clockStyle}>
      <Countdown
        key={color}
        date={Date.now() + (time * 60000)}
        intervalDelay={3}
        zeroPadTime={2}
        autoStart={false}
        daysInHours
      />
    </div>
  );
}

export default Clock;
