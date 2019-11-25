import React from 'react';
import Countdown from 'react-countdown-now';

function Clock() {
  return (
    <Countdown
      date={Date.now() + 3600000}
      intervalDelay={3}
      zeroPadTime={2}
      autoStart={false}
      daysInHours
    />
  );
}

export default Clock;
