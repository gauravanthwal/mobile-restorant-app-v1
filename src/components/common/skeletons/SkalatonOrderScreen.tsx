import { View, Text } from 'react-native'
import React from 'react'
import BaseScalaton from './BaseScalaton'

type SkalatonOrderScreenPropsType = {
    height?: number;
    width?: number | string;
  };

const SkalatonOrderScreen = ({width, height}: SkalatonOrderScreenPropsType) => {
  return (
    <View className='px-3'>
        <BaseScalaton/>
        <BaseScalaton/>
        <BaseScalaton/>
        <BaseScalaton/>
        <BaseScalaton/>
    </View>
  )
}

export default SkalatonOrderScreen