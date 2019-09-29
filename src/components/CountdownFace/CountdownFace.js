import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tokens from '../../utils/styleTokens';


const Face = styled.div`
  color: ${tokens.ColorWhite};
  font-family: ${tokens.fontFamilyBold};
  font-size: 34vw;
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
    <Face>
      <span className={timeClass}>
        {props.time}
      </span>
    </Face>
  );
}


CountdownFace.propTypes = {
  time: PropTypes.any
}

CountdownFace.defaultProps = {
  intervals: ['-']
};


export default CountdownFace;
