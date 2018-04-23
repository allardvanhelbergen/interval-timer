import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import styles from '../../sharedStyles';


const STYLES = css`
  color: ${styles.colorPrimary};
  margin: 50px;
  font-size: 20rem;
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