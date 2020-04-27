'use strict';

import React from 'react';
import styled, { css } from '@emotion/primitives';
import { Text } from 'react-sketchapp';

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
  LargeButton: styled.View`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 250px;
    height: 60px;
  `,
  LargeText: styled.Text`
    color: #ffffff;
    font-size: 18px;
  `,
  MediumButton: styled.View`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 200px;
    height: 50px;
  `,
  MediumText: styled.Text`
    color: #ffffff;
    font-size: 16px;
  `,
  SmallButton: styled.View`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 150px;
    height: 40px;
  `,
  SmallText: styled.Text`
    color: #ffffff;
    font-size: 14px;
  `,
  XSmallButton: styled.View`
    ${basic}
    ${props => getColorSet(props.type)}
    width: 100px;
    height: 30px;
  `,
  XSmallText: styled.Text`
    color: #ffffff;
    font-size: 12px;
  `,
};

function getComponents(props) {
  const { width } = props;
  const { 
    LargeButton,
    LargeText,
    MediumButton,
    MediumText,
    SmallButton,
    SmallText,
    XSmallButton,
    XSmallText,
  } = Buttons;

  switch (width) {
    case 'lg':
      return {
        button: LargeButton,
        text: LargeText,
      };
    case 'md':
      return {
        button: MediumButton,
        text: MediumText,
      };
    case 'sm':
      return {
        button: SmallButton,
        text: SmallText,
      };
    case 'xs':
      return {
        button: XSmallButton,
        text: XSmallText,
      };
    default:
      return {
        button: LargeButton,
        text: LargeText,
      };
  }
}

const Button = (props) => {
  const { title } = props;
  const Components = getComponents(props);
  return (
    <Components.button {...props}>
      <Components.text>{title}</Components.text>
    </Components.button>
  );
};

export default Button;
