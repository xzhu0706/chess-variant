import React from 'react';
import Countdown from 'react-countdown-now';

const clockStyle = {
  fontSize: '30px',
};

function Clock() {
  return (
    <div style={clockStyle}>
      <Countdown
        date={Date.now() + 3600000}
        intervalDelay={3}
        zeroPadTime={2}
        autoStart={false}
        daysInHours
      />
    </div>
  );
}

export default Clock;
