import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';


const STYLES = css`
  background-color: rgba(0, 0, 0, .1);
  border-radius: 3px;
  font-size: 26px;
  margin: 20px;
  min-height: 300px;
  padding: 10px;
  width: 200px;

  .interval {
    margin: 10px 0;

    &--current {
      background-color: #bad455;
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