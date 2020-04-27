'use strict';

import React from 'react';
import { render, Page, Artboard, View, Text } from 'react-sketchapp';
import Button from './Button';

const styles = {
  page: {
    width: 2000,
    height: 1000,
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    width: 2000,
    height: 640,
    marginRight: 20,
  },
  view: {
    width: 300,
    height: 200,
    backgroundColor: '#c6c6c6',
  },
  text: {
    fontSize: 15,
  },
};

const SketchBoard = () => {
  return (
    <Page style={styles.page}>
      <Artboard name='테스트' style={styles.container}>
        <Button
          key='lg'
          title='Large Button!'
          width='lg'
          type='primary' />
        <Button
          key='md'
          title='Medium Button!'
          width='md'
          type='primary' />
        <Button 
          key='sm'
          title='Small Button!'
          width='sm'
          type='primary' />
        <Button 
          key='xs'
          title='XSmall Button!'
          width='xs'
          type='primary' />
      </Artboard>
    </Page>
  );
};

export default () => {
  render(<SketchBoard />, context.document.currentPage());
};
