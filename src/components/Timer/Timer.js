import React from 'react';
import './Timer.css';


const DEFAULT_TIME_LEFT = 45;


class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: DEFAULT_TIME_LEFT,
      live: false
    }

    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState(() => {
      return {
        live: true
      }
    });

    this.interval = window.setInterval(function() {
      if (this.state.timeLeft > 0) {
        this.setState(function(currentState) {
          return {
            timeLeft: currentState.timeLeft - 1
          }
        })
      } else {
        this.resetTime();
      }
    }.bind(this), 1000);  // 1 sec
  }

  stopTimer() {
    this.setState(() => {
      return {
        live: false,
      }
    });

    window.clearInterval(this.interval);
  }

  resetTime() {
    this.setState(function(currentState) {
      return {
        timeLeft: DEFAULT_TIME_LEFT
      }
    })
  }

  clearTimer() {
    window.clearInterval(this.interval);
  }

  handleStartStop(event) {
    if (!this.state.live) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  handleReset() {
    this.resetTime();
  }

  render() {
    return (
      <div>
        <div className='Time'>
          {this.state.timeLeft}
        </div>
        <div>
          <button className='Timer__button' onClick={this.handleStartStop}>
            {(this.state.live) ? 'Stop' : 'Play'}
          </button>
          <button className='Timer__button' onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}


export default Timer;