import {View, Text} from 'react-native';
import React from 'react';
import BaseScalaton from './BaseScalaton';

type SkalatonCartScreenPropsType = {
  height?: number;
  width?: number | string;
};
const SkalatonCartScreen = ({width, height}: SkalatonCartScreenPropsType) => {
  return (
    <View className="px-3">
      <BaseScalaton />
      <BaseScalaton />
      <BaseScalaton />
      <BaseScalaton />
      <BaseScalaton />
    </View>
  );
};

export default SkalatonCartScreen;
