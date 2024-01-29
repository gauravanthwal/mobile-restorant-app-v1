import {View, Text} from 'react-native';
import React from 'react';

const SkalatonProducts = () => {
  return (
    <View className="px-3">
      <Skalaton />
      <Skalaton />
      <Skalaton />
    </View>
  );
};

const Skalaton = () => {
  return (
    <View className="flex-row justify-between gap-6">
      <View className={`bg-gray-200 h-[180px] rounded-xl my-6 flex-1`}></View>
      <View className={`bg-gray-200 h-[180px] rounded-xl my-6 flex-1`}></View>
    </View>
  );
};

export default SkalatonProducts;
