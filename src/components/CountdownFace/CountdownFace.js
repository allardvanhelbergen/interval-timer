import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styles from '../../sharedStyles';


const STYLES = css`
  color: ${styles.colorPrimary};
  margin: 50px;
  font-size: 20rem;

  .time--some {
    color: gold;
  }

  .time--little {
    color: orange;
  }

  .time--none {
    color: maroon;
  }
`;


function CountdownFace(props) {
  let timeClass = '';

  if (props.time === 0) {
    timeClass = 'time--none';
  } else if (props.time <= 3) {
    timeClass = 'time--little';
  } else if (props.time <= 10) {
    timeClass = 'time--some';
  }

  return (
    <div className={STYLES}>
      <span className={timeClass}>
        {props.time}
      </span>
    </div>
  );
}


CountdownFace.propTypes = {
  time: PropTypes.number.isRequired
}


export default CountdownFace;