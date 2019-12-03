import React from 'react';
import Countdown from 'react-countdown-now';

export default class Clock extends React.Component {
  render() {
    const { refCallback, time } = this.props;

    return (
      <Countdown
        ref={refCallback}
        date={Date.now() + (time * 60000)}
        intervalDelay={3}
        zeroPadTime={2}
        autoStart={false}
        daysInHours
      />
    );
  }
}
