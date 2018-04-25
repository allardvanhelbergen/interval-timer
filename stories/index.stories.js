import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


storiesOf('Countdown face', module)
  .add('with timeRemaining', () => (
    <h1></h1>
  ))
  .add('without timeRemaining', () => (
    <h1></h1>
  ));
