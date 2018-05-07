import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styles from '../../sharedStyles';


const STYLES = css`
  .button {
    background-color: ${styles.colorPrimary};
    border-radius: ${styles.borderRadius};
    border: 1px solid #4b8f29;
    color: ${styles.colorWhite};
    cursor: pointer;
    display: inline-block;
    font-size: ${styles.fontSize};
    font-weight: bold;
    margin: 20px;
    padding: 22px 55px;
    text-decoration: none;
    text-shadow: 0 1px 0 #5b8a3c;
    width: 200px;
  }

  .button:hover {
    background-color: #72b352;
  }

  .button:active {
    position: relative;
    top: 1px;
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