import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';


const STYLES = css`
  .button {
    background-color:#bad455;
    -moz-border-radius:4px;
    -webkit-border-radius:4px;
    border-radius:4px;
    border:1px solid #4b8f29;
    display:inline-block;
    cursor:pointer;
    color:#fff;
    font-size:28px;
    font-weight:bold;
    padding:22px 55px;
    text-decoration:none;
    text-shadow:0px 1px 0px #5b8a3c;
    margin: 20px;
    width: 200px;
  }

  .button:hover {
    background-color:#72b352;
  }

  .button:active {
    position:relative;
    top:1px;
  }
`;


function CountdownControls(props) {
  return (
    <div className={STYLES}>
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