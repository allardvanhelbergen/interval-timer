import React from 'react';
import PropTypes from 'prop-types';
import CountdownFace from '../CountdownFace/CountdownFace';
import CountdownControls from '../CountdownControls/CountdownControls';
import './Countdown.css';


const DEFAULT_TIME_REMAINING = 45;


class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 0,
      live: false
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
      this.reset();
    }
  }

  start() {
    this.setState(() => {
      return {
        live: true
      }
    });

    this.interval = window.setInterval(this.tick.bind(this), 1000);  // 1 sec
  }

  stop() {
    this.setState(() => {
      return {
        live: false,
      }
    });

    this.clear();
  }

  reset() {
    this.stop();

    this.setState(() => {
      return {
        timeRemaining: DEFAULT_TIME_REMAINING
      }
    })

    this.start();
  }

  clear() {
    window.clearInterval(this.interval);
  }

  startStop() {
    if (this.state.live) {
      this.stop();
    } else {
      this.start();
    }
  }

  componentDidMount() {
    this.setState(function() {
      return {
        timeRemaining: this.props.time
      }
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
            live={this.state.live}
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