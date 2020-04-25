'use strict';

import React from 'react';
// import { button } from '@dsr/styles';
import { View, Text } from 'react-sketchapp';

const button = {
  width: '100%',
  height: 30,
};

const Button = (props) => {
  const { title, children } = props;

  return (
    <View style={button}>
      {
        title ? 
          (
            <Text>
              title
            </Text>
          ) : children
      }
    </View>
  );
};

export default Button;
