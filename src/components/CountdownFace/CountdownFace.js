import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import tokens from '../../utils/styleTokens';


const STYLES = css`
  color: ${tokens.ColorWhite};
  font-family: ${tokens.fontFamilyBold};
  font-size: 38vw;
  font-variant-numeric: tabular-nums;
  text-align: center;
  
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
  time: PropTypes.any
}

CountdownFace.defaultProps = {
  intervals: ['-']
};


export default CountdownFace;
