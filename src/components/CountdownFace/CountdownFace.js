import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';


const STYLES = css`
  color: #bad455;
  margin: 50px;
  font-size: 20em;
`;


function CountdownFace(props) {
  return (
    <div className={STYLES}>
      {props.time}
    </div>
  );
}


CountdownFace.propTypes = {
  time: PropTypes.number.isRequired
}


export default CountdownFace;