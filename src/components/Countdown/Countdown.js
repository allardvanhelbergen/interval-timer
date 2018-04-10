import React from 'react';
import PropTypes from 'prop-types';
import CountdownFace from '../CountdownFace/CountdownFace';
import CountdownControls from '../CountdownControls/CountdownControls';
import './Countdown.css';


const DEFAULT_TIME_REMAINING = 0;


class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: DEFAULT_TIME_REMAINING,
      timeRemaining: 0,
      isRunning: false,
    }

    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  tick() {
    this.setState(function(currentState) {
      return {
        timeRemaining: currentState.timeRemaining - 1
      }
    });

    if (this.state.timeRemaining < 0) {
      this.props.onEnd();
    }
  }

  start() {
    this.setState(() => {
      return {
        isRunning: true
      }
    });

    this.interval = window.setInterval(this.tick.bind(this), 1000);  // 1 sec
  }

  stop() {
    this.setState(() => {
      return {
        isRunning: false,
      }
    });

    this.clear();
  }

  reset() {
    this.stop();

    this.setState(() => {
      return {
        timeRemaining: this.state.startTime
      }
    })

    this.start();
  }

  clear() {
    window.clearInterval(this.interval);
  }

  startStop() {
    if (this.state.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(() => {
      return {
        timeRemaining: newProps.time,
        startTime: newProps.time,
      };
    });
  }

  componentDidMount() {
    this.setState(function() {
      return {
        timeRemaining: this.props.time,
        startTime: this.props.time,
      };
    });
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    return (
      <div>
        <CountdownFace time={this.state.timeRemaining} />
        <CountdownControls
          startStop={this.startStop}
          reset={this.reset}
          isRunning={this.state.isRunning}
        />
      </div>
    );
  }
}


Countdown.propTypes = {
  time:PropTypes.number,
}


Countdown.defaultProps = {
  time: DEFAULT_TIME_REMAINING,
}


export default Countdown;