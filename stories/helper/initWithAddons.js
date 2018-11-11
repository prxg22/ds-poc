import React from 'react';

import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import theme from '../../src/theme';

const createStory = (title) => {
  const stories = storiesOf(title || 'Story', module);

  stories.addDecorator(withKnobs);
  stories.addDecorator(withInfo);
  stories.addDecorator(story => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  ));

  return stories;
};

export default createStory;
