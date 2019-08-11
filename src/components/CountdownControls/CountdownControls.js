import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import tokens from '../../utils/styleTokens';


const STYLES = css`
  grid-row-start: 2;

  .button {
    background-color: transparent;
    border-radius: ${tokens.BorderRadiusDefault}rem;
    border-color: transparent;
    color: ${tokens.ColorWhite};
    cursor: pointer;
    display: inline-block;
    font-size: ${tokens.FontSizeMedium}rem;
    font-weight: bold;
    margin: 1rem;
    padding: 1.5rem 3.5rem;
    text-decoration: none;
    width: 12rem;
  }
  
  .button:hover {
    background-color: #a1a1a1;
    border: 1px solid #929292;
    text-shadow: 0 1px 0 #929292;
  }

  .button:active {
    background-color: #323232;
    position: relative;
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
