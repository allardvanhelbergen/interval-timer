import React, { Component } from 'react';
import styled from '@emotion/styled';
import BackgroundAnimation from '../BackgroundAnimation';
import IntervalList from '../IntervalList';
import CountdownFace from '../CountdownFace';
import CountdownControls from '../CountdownControls';
import tokens from '../../utils/styleTokens';
import loadGapi from '../../utils/googleApi';


const LAYOUT = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: ${tokens.FontFamilySystem};
`;

const COUNTDOWN = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 75% 25%;
  justify-items: center;
  justify-content: center;
  align-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInterval: 0,
      isRunning: false,
      timeRemaining: null,
      intervals: null,
    };

    this.handleStartInterval = this.handleStartInterval.bind(this);
    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  formatTime(time) {
    if (time > 60) {
      let min = Math.floor(time / 60);
      let sec = time % 60;
      return `${min}:${sec}`;
    }
    return time;
  }

  handleStartInterval() {
    let newInterval = arguments[0];

    this.setState((currentState) => {
      return {
        currentInterval: newInterval,
        timeRemaining: currentState.intervals[newInterval].time
      };
    });
  }

  handleCountdownEnd() {
    let nextInterval = this.state.currentInterval + 1;

    if (nextInterval >= this.state.intervals.length) {
      this.stop();
    } else {
      this.setState((currentState) => {
        return {
          currentInterval: nextInterval,
          timeRemaining: currentState.intervals[nextInterval].time
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

    this.setState((currentState) => {
      return {
        timeRemaining: currentState.intervals[currentState.currentInterval].time
      };
    });

    this.start();
  }

  start() {
    this.setState((currentState) => {
      return {
        timeRemaining: currentState.intervals[currentState.currentInterval].time,
        isRunning: true
      };
    });

    this.interval = window.setInterval(this.tick.bind(this), 1000); // 1 sec
  }

  stop() {
    this.setState(() => {
      return {
        isRunning: false
      };
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
          timeRemaining: currentState.timeRemaining - 1
        };
      });
    }
  }

  componentDidMount() {
    // Load the Google API client library.
    loadGapi((data, error) => {
      if (data) {
        const intervals = data.intervals;
        this.setState({ intervals });
      } else {
        console.error(error);
      }
    });
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    return (
      <LAYOUT>
        <IntervalList
          intervals={this.state.intervals}
          currentInterval={this.state.currentInterval}
          startIntervalFunc={this.handleStartInterval}
        />
        <COUNTDOWN>
          <CountdownFace time={this.formatTime(this.state.timeRemaining)} />
          <CountdownControls
            startStop={this.startStop}
            reset={this.reset}
            isRunning={this.state.isRunning}
          />
        </COUNTDOWN>
        <BackgroundAnimation />
      </LAYOUT>
    );
  }
}

export default App;
