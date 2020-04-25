import React from 'react';
import { button } from '@dsr/styles';

const Button = (props) => {
  const { title, children } = props;

  return (
    <button styles={button}>
      { title ? title : children }
    </button>
  );
};

export default Button;
