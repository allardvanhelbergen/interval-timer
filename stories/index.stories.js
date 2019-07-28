import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { injectGlobal } from 'emotion';

import { globalStyles } from '../src/utils/globalStyles';
import BackgroundAnimation from '../src/components/BackgroundAnimation';
import CountdownControls from '../src/components/CountdownControls/CountdownControls.js'
import CountdownFace from '../src/components/CountdownFace/CountdownFace.js';
import IntervalList from '../src/components/IntervalList/IntervalList.js';

injectGlobal`
  ${globalStyles}
`;

storiesOf('Background animation', module)
  .add('Animation', () => (
    <BackgroundAnimation />
  ));

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
      startStop={action('start-stop')}
      reset={action('reset')}
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
