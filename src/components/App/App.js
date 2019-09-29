import React, { Component } from 'react';
import styled from '@emotion/styled';
import BackgroundAnimation from '../BackgroundAnimation';
import IntervalList from '../IntervalList';
import CountdownFace from '../CountdownFace';
import CountdownControls from '../CountdownControls';
import tokens from '../../utils/styleTokens';
import loadGapi from '../../utils/googleApi';


const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  padding: ${tokens.grid * 2}px;
`;

const Sidebar = styled.section`
  /* sets max-width of sidebar */
  flex-basis: ${45 * tokens.grid}px; 
  flex-grow: 1;
`;

const Countdown = styled.section`
  flex-basis: 0;
  flex-grow: 999;
  /* Pushes the sidebar away as it take precedence of its flex-basis */
  min-width: 62%;
  margin-bottom: ${tokens.grid * 2}px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInterval: 0,
      isRunning: false,
      timeRemaining: '-',
      intervals: [{time: '-', description: 'Loading...'}],
    };

    this.handleStartInterval = this.handleStartInterval.bind(this);
    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
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
      <>
        <MainContainer>
          <Countdown>
            <CountdownFace time={this.state.timeRemaining} />
            <CountdownControls
              startStop={this.startStop}
              reset={this.reset}
              isRunning={this.state.isRunning}
            />
          </Countdown>
          <Sidebar>
            <IntervalList
              intervals={this.state.intervals}
              currentInterval={this.state.currentInterval}
              startIntervalFunc={this.handleStartInterval}
            />
          </Sidebar>
        </MainContainer>
        <BackgroundAnimation />
      </>
    );
  }
}

export default App;
