import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../../theme';
import {HomeIcon} from 'react-native-heroicons/solid';

import {
  UserCircleIcon,
  ShoppingCartIcon,
  TruckIcon,
} from 'react-native-heroicons/outline';
import {screens} from '../../../navigation/screenDetails';
import {useNavigation, useRoute} from '@react-navigation/native';

const BottomTab = () => {
  const navigation: any = useNavigation();
  const route = useRoute();

  const ifCurrentScreen = (screenName: string) => {
    if (screenName == route.name) {
      return true;
    }
    return false;
  };

  return (
    <View className="w-full py-2 px-8 absolute bottom-0 bg-gray-50 rounded-tl-3xl rounded-tr-3xl">
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.home.name)}>
          <View className="flex justify-center items-center">
            <HomeIcon
              size={25}
              color={ifCurrentScreen(screens.home.name) ? '#fb7185' : '#374151'}
            />
            <Text
              className=""
              style={{
                fontSize: 12,
                color: ifCurrentScreen(screens.home.name)
                  ? themeColors.bg
                  : '#374151',
              }}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.orders.name)}>
          <View className="flex justify-center items-center">
            <TruckIcon
              size={25}
              color={
                ifCurrentScreen(screens.orders.name) ? '#fb7185' : '#374151'
              }
            />
            <Text
              className=""
              style={{
                fontSize: 12,
                color: ifCurrentScreen(screens.orders.name)
                  ? themeColors.bg
                  : '#374151',
              }}>
              Orders
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.cart.name)}>
          <View className="flex justify-center items-center">
            <ShoppingCartIcon
              size={25}
              color={ifCurrentScreen(screens.cart.name) ? '#fb7185' : '#374151'}
            />
            <Text
              className=""
              style={{
                fontSize: 12,
                color: ifCurrentScreen(screens.cart.name)
                  ? themeColors.bg
                  : '#374151',
              }}>
              Cart
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.myAccount.name)}>
          <View className="flex justify-center items-center">
            <UserCircleIcon
              color={
                ifCurrentScreen(screens.myAccount.name) ? '#fb7185' : '#374151'
              }
            />
            <Text
              className=""
              style={{
                fontSize: 12,
                color: ifCurrentScreen(screens.myAccount.name)
                  ? themeColors.bg
                  : '#374151',
              }}>
              Account
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
