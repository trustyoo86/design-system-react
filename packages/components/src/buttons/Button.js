import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

function getColorSet(type = 'primary') {
  const basic = `
    background-color: #e55;
    color: #ffffff;
    border: 1px solid #e55;
  `;
  
  if (type === 'primary') { return basic; }
  if (type === 'bordered') {
    return `
      background-color: #ffffff;
      color: #c3c3c3;
      border: 1px solid #c3c3c3;
    `;
  }

  return basic;
}

const basic = css`
  box-sizing: border-box;
  padding: 0 5px;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
`;

const Buttons = {
  LargeButton: styled.button`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 250px;
    height: 60px;
    font-size: 18px;
  `,
  MediumButton: styled.button`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 200px;
    height: 50px;
    font-size: 16px;
  `,
  SmallButton: styled.button`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 150px;
    height: 40px;
    font-size: 14px;
  `,
  XSmallButton: styled.button`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 100px;
    height: 30px;
    font-size: 12px;
  `,
};

function getComponents(props) {
  const { width } = props;
  const { 
    LargeButton,
    MediumButton,
    SmallButton,
    XSmallButton,
  } = Buttons;

  switch (width) {
    case 'lg':
      return LargeButton;
    case 'md':
      return MediumButton;
    case 'sm':
      return SmallButton;
    case 'xs':
      return XSmallButton;
    default:
      return LargeButton;
  }
}


const Button = (props) => {
  const { title, children } = props;
  const Components = getComponents(props);
  return (
    <Components {...props}>
      { title ? title : children }
    </Components>
  );
};

export default Button;
