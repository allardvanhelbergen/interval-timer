import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import styles from '../../sharedStyles';


const STYLES = css`
  background-color: rgba(0, 0, 0, .1);
  border-radius: ${styles.borderRadius};
  margin: 20px;
  min-height: 300px;
  padding: 10px;
  width: 200px;
  text-align: center;

  .interval {
    margin: 10px 0;
    border-radius: ${styles.borderRadius};

    &--current {
      background-color: ${styles.colorPrimary};
      color: ${styles.colorWhite};
    }
  }
`;


function IntervalList(props) {
  return (
    <div className={STYLES}>
      {props.intervals.map((interval, i) => {
        return (
          <div
              key={interval + '-' + i}
              className={'interval ' + ((i === props.currentInterval) ? 'interval--current' : '')}
          >
            <span>{interval}</span>
          </div>
        )
      })}
    </div>
  );
}



IntervalList.propTypes = {
  currentInterval: PropTypes.number,
  intervals: PropTypes.array,
};


export default IntervalList;