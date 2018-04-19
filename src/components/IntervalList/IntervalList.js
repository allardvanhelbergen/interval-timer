import React from 'react';
import './IntervalList.css';


function IntervalList(props) {
  return (
    <div>
      {props.intervals.map((interval, i) => {
        return (<div key={interval + '-' + i}>{interval}</div>)
      })}
    </div>
  );
}


export default IntervalList;