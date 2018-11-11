import React from 'react';
import createStory from './helper/initWithAddons';


import Button from '../src/components/Button';

const stories = createStory('Button');

stories
  .add('Primary', () => (
    <Button variant="primary" width={1/2} text="texto" />
  ))
  .add('Secondary', () => (
    <Button variant="secondary" width={1/2} text="texto" />
  ));
