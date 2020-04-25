'use strict';

import React from 'react';
import { render, Page, Artboard } from 'react-sketchapp';
import Button from './Button';

const Buttons = () => {
  return (
    <Page>
      <Artboard name='테스트'>
        <Button title='테스트' />
      </Artboard>
    </Page>
  );
};

export default (context) => {
  render(<Buttons />, context.document.currentPage());
};
