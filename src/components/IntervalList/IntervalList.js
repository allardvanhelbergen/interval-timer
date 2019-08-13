import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import tokens from '../../utils/styleTokens';


const STYLES = css`
  background-color: rgba(0, 0, 0, .1);
  border-radius: ${tokens.BorderRadiusDefault}rem;
  margin: 20px;
  min-height: 300px;
  padding: 10px;
  width: 400px;

  .interval {
    margin: 10px 0;
    border-radius: ${tokens.BorderRadiusDefault}rem;
    text-align: left;

    &--current {
      background-color: ${tokens.ColorPrimary};
      color: ${tokens.ColorWhite};
    }

    .time,
    .description {
      display: inline-block;
      padding: 10px 20px;
    }

    .time {
      width: 30px;
      text-align: right;
    }
  }
`;


function IntervalList(props) {
  return (
    <div className={STYLES}>
      {props.intervals && props.intervals.map((interval, i) => {
        const {time, description} = interval;

        return (
          <div
              key={time + '-' + i}
              onClick={props.startIntervalFunc.bind(this, i)}
              className={'interval ' + ((i === props.currentInterval) ? 'interval--current' : '')}
          >
            <span className="time">{time}</span>
            <span className="description">{description}</span>
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
  intervals: null,
  startIntervalFunc: () => {},
};


export default IntervalList;
