import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styles from '../../sharedStyles';


const STYLES = css`
  background-color: rgba(0, 0, 0, .1);
  border-radius: ${styles.borderRadius};
  margin: 20px;
  min-height: 300px;
  padding: 10px;
  width: 400px;

  .interval {
    margin: 10px 0;
    border-radius: ${styles.borderRadius};
    text-align: left;

    &--current {
      background-color: ${styles.colorPrimary};
      color: ${styles.colorWhite};
    }

    .time,
    .description {
      display: inline-block;
      padding: 10px 20px;
    }

    .time {
      width: 100px;
      text-align: right;
    }
  }
`;


function IntervalList(props) {
  return (
    <div className={STYLES}>
      {props.intervals.map((interval, i) => {
        const {time, description} = interval;

        return (
          <div
              key={time + '-' + i}
              onClick={props.startIntervalFunc.bind(this, i)}
              className={'interval ' + ((i === props.currentInterval) ? 'interval--current' : '')}
          >
            <div className="time">{time}</div>
            <div className="description">{description}</div>
          </div>
        )
      })}
    </div>
  );
}


IntervalList.propTypes = {
  currentInterval: PropTypes.number,
  intervals: PropTypes.array,
  startIntervalFunc: PropTypes.func,
};

IntervalList.defaultProps ={
  currentInterval: 0,
  intervals: 0,
  startIntervalFunc: () => {},
};


export default IntervalList;