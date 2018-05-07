import React from 'react';
import { injectGlobal } from 'emotion';
import { storiesOf } from '@storybook/react';
import styles from '../src/sharedStyles.js';
import CountdownControls from '../src/components/CountdownControls/CountdownControls.js'
import CountdownFace from '../src/components/CountdownFace/CountdownFace.js';
import IntervalList from '../src/components/IntervalList/IntervalList.js';


injectGlobal`
  body {
    background-color: gray;
    color: #333;
    font-family: sans-serif;
    font-size: ${styles.fontSize};
    margin: 0;
    padding: 0;
  }
`;


storiesOf('Countdown face', module)
  .add('with time', () => (
    <CountdownFace time={60}/>
  ))
  .add('with some time', () => (
    <CountdownFace time={9}/>
  ))
  .add('with little time', () => (
    <CountdownFace time={3}/>
  ))
  .add('no time remaining', () => (
    <CountdownFace time={0}/>
  ));


storiesOf('Countdown controls', module)
  .add('default', () => (
    <CountdownControls
      startStop={null}
      reset={null}
      isRunning={false}
    />
  ));


storiesOf('Interval list', module)
  .add('default', () => (
    <IntervalList
      intervals={[
        {time: 60, description: "Stretch"},
        {time: 30, description: "Jump"},
        {time: 40, description: "Lunge"},
        {time: 50, description: "Lift"},
        {time: 20, description: "Cool down"},
      ]}
      currentInterval={1}
    />
  ));