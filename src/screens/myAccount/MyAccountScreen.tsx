import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import BottomTab from '../../components/common/navigation/BottomTab';
import MyAccount from '../../components/myAccount/MyAccount';

const MyAccountScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
        <View className="px-2">
      <ScrollView>
          <MyAccount />
      </ScrollView>
        </View>
        <BottomTab />
    </View>
  );
};

export default MyAccountScreen;
