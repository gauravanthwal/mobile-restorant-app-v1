import { View, Text } from 'react-native'
import React from 'react'
import BottomTab from '../../components/common/navigation/BottomTab'

const OrdersScreen = () => {
  return (
    <View className='flex-1'>
      <Text>OrdersScreen</Text>
      <BottomTab/>
    </View>
  )
}

export default OrdersScreen