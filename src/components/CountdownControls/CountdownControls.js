import React from 'react';
import PropTypes from 'prop-types';
import './CountdownControls.css';


function CountdownControls(props) {
  return (
    <div>
      <button className='button' onClick={props.startStop}>
        {(props.isRunning) ? 'Stop' : 'Start'}
      </button>
      <button className='button' onClick={props.reset}>
        Reset
      </button>
    </div>
  );
}


CountdownControls.propTypes = {
  startStop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
}


export default CountdownControls