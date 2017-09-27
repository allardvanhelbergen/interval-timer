import React, { Component } from 'react';
import Countdown from '../Countdown/Countdown';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Countdown time={45} />
      </div>
    );
  }
}


export default App;
