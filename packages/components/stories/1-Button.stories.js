import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '../src/buttons';
// import { Button } from '@storybook/react/demo';

export default {
  title: '버튼',
  component: Button,
};

const css = {
  display: 'flex',
  marginBottom: 10,
};

export const Text = () => {
  return (
    <>
      {/* primary */}
      <h3>Primary</h3>
      <div style={css}>
        <Button 
          title='Large Button!'
          width='lg'
          type='primary'
          onClick={action('clicked')} />
        <Button 
          title='Medium Button!'
          width='md'
          type='primary'
          onClick={action('clicked')} />
        <Button 
          title='Small Button!'
          width='sm'
          type='primary'
          onClick={action('clicked')} />
        <Button 
          title='XSmall Button!'
          width='xs'
          type='primary'
          onClick={action('clicked')} />
      </div>
      {/* bordered */}
      <h3>Bordered</h3>
      <div style={css}>
        <Button 
          title='Large Button!'
          width='lg'
          type='bordered'
          onClick={action('clicked')} />
        <Button 
          title='Medium Button!'
          width='md'
          type='bordered'
          onClick={action('clicked')} />
        <Button 
          title='Small Button!'
          width='sm'
          type='bordered'
          onClick={action('clicked')} />
        <Button 
          title='XSmall Button!'
          width='xs'
          type='bordered'
          onClick={action('clicked')} />
      </div>
    </>
  );
};

Text.story = {
  name: '일반 텍스트',
};

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  name: '내부 컴포넌트 사용',
};
