import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import IntervalList from '../IntervalList/IntervalList';
import CountdownFace from '../CountdownFace/CountdownFace';
import CountdownControls from '../CountdownControls/CountdownControls';


const STYLES = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .countdown {
    text-align: center;
  }
`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInterval: 0,
      isRunning: false,
      timeRemaining: 0,
    }

    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  handleCountdownEnd() {
    let nextInterval = this.state.currentInterval + 1;

    if (nextInterval >= this.props.intervals.length) {
      this.stop();
    } else {
      this.setState((currentState, props) => {
        return {
          currentInterval: nextInterval,
          timeRemaining: props.intervals[nextInterval].time,
        };
      });
    }
  }

  startStop() {
    if (this.state.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  reset() {
    this.stop();

    this.setState((currentState, props) => {
      return {
        timeRemaining: props.intervals[currentState.currentInterval].time,
      }
    })

    this.start();
  }

  start() {
    this.setState(() => {
      return {
        isRunning: true,
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

  clear() {
    window.clearInterval(this.interval);
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      this.handleCountdownEnd();
    } else {
      this.setState(function(currentState) {
        return {
          timeRemaining: currentState.timeRemaining - 1,
        }
      });
    }
  }

  componentDidMount() {
    this.setState((currentState, props) => {
      return {
        timeRemaining: props.intervals[currentState.currentInterval].time,
      }
    });
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    return (
      <div className={STYLES}>
        <IntervalList intervals={this.props.intervals} currentInterval={this.state.currentInterval}/>
        <div className="countdown">
          <CountdownFace time={this.state.timeRemaining} />
          <CountdownControls
            startStop={this.startStop}
            reset={this.reset}
            isRunning={this.state.isRunning}
          />
        </div>
      </div>
    );
  }
}


App.propTypes = {
  intervals: PropTypes.array,
};


App.defaultProps = {
  intervals: [2, 3, 4],
}



export default App;
