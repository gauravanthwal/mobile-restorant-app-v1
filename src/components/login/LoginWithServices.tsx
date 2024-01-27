import {View, TouchableOpacity,Image } from 'react-native';
import React from 'react';

const LoginWithServices = () => {
  return (
    <View className="px-12 flex-row justify-around">
      <TouchableOpacity className="bg-gray-100 rounded-2xl p-1">
        <Image
          source={require('../../assets/icons/google.png')}
          className="w-10 h-10"
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-100 rounded-2xl p-1">
        <Image
          source={require('../../assets/icons/apple.png')}
          className="w-10 h-10"
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-100 rounded-2xl p-1">
        <Image
          source={require('../../assets/icons/facebook.png')}
          className="w-10 h-10"
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginWithServices;
