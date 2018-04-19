import React, { Component } from 'react';
import Countdown from '../Countdown/Countdown';
import IntervalList from '../IntervalList/IntervalList';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervals: [ 2, 2 ],
      currentInterval: 0,
      isRunning: false,
    }

    this.handleCountdownEnd = this.handleCountdownEnd.bind(this);
  }

  handleCountdownEnd() {
    this.setState(() => {return { isRunning: false };})

    if (this.state.currentInterval < this.state.intervals.length) {
      this.setState((currentState) => {
        return {
          currentInterval: currentState.currentInterval + 1,
          isRunning: true,
        };
      })
    }
  }

  componentDidMount() {
    this.setState(function() {
      return {
        isRunning: false,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <IntervalList intervals={this.state.intervals} />
        <Countdown
          time={this.state.intervals[this.state.currentInterval]}
          onEnd={this.handleCountdownEnd}
          isRunning={this.state.isRunning}
        />
      </div>
    );
  }
}


export default App;




// {this.state.isRunning && <Countdown
//           time={this.state.intervals[this.state.currentInterval]}
//           onEnd={this.handleCountdownEnd}
//         />}