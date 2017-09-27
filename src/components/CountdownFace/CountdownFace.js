import React from 'react';
import PropTypes from 'prop-types';
import './CountdownFace.css';



function CountdownFace(props) {
  return (
    <div className='countdown-face'>
      {props.time}
    </div>
  );
}


CountdownFace.propTypes = {
  time: PropTypes.number.isRequired
}


export default CountdownFace;