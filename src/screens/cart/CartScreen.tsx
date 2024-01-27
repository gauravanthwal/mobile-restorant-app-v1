import { View, Text } from 'react-native'
import React from 'react'
import BottomTab from '../../components/common/navigation/BottomTab'

const CartScreen = () => {
  return (
    <View className='flex-1'>
      <Text>CartScreen</Text>
      <BottomTab/>
    </View>
  )
}

export default CartScreen