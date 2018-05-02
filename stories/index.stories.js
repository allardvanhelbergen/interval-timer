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
  .add('with timeRemaining', () => (
    <CountdownFace time={60}/>
  ))
  .add('without timeRemaining', () => (
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
      intervals={[60, 30, 40, 50, 20]}
      currentInterval={1}
    />
  ));