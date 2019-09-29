import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tokens from '../../utils/styleTokens';


const IntervalListContainer = styled.ul`
  background-color: rgba(256, 256, 256, .2);
  border-radius: ${tokens.BorderRadiusDefault}rem;
  padding: ${tokens.grid}px;
  margin: 0;
  min-height: ${tokens.grid * 32}px;
  list-style: none;
`;

const Interval = styled.li`
  display: flex;
  margin: ${tokens.grid}px 0 0;
  border-radius: ${tokens.BorderRadiusDefault}rem;

  &:first-of-type {
    margin: 0;
  }

  &:hover {
    background-color: inherit;
    cursor: pointer;
  }

  &:active {
    background-color: ${tokens.ColorBlack};
    color: ${tokens.ColorWhite};
  }

  &.current {
    background-color: ${tokens.ColorPrimary};
    color: ${tokens.ColorWhite};
  }

  .time,
  .description {
    padding: ${tokens.grid}px ${tokens.grid * 2}px;
  }

  .time {
    text-align: right;
    flex-basis: 3ch;
    font-variant-numeric: tabular-nums;
  }
`;


function IntervalList(props) {
  return (
    <nav>
      <IntervalListContainer>
        {props.intervals && props.intervals.map((interval, i) => {
          const {time, description} = interval;

          return (
            <Interval
                key={time + '-' + i}
                onClick={props.startIntervalFunc.bind(this, i)}
                className={(i === props.currentInterval) ? 'current' : ''}
            >
              <div className="time">{time}</div>
              <div className="description">{description}</div>
            </Interval>
          )
        })}
      </IntervalListContainer>
    </nav>
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
