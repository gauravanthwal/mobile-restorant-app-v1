import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../theme';
import {screens} from '../../navigation/screenDetails';

const Welcome = ({navigation}: any) => {
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-4xl font-bold text-white text-center">
          Let's Get Started!
        </Text>
        <View className="flex-row justify-center ">
          <Image
            source={require('../../assets/images/dog-pizza.jpg')}
            style={{width: 350, height: 350}}
            className="rounded-full"
          />
        </View>

        <View className="space-y-4">
          <TouchableOpacity
            className="bg-yellow-400 mx-8 py-3 rounded-2xl"
            onPress={() => navigation.navigate(screens.login.name)}>
            <Text className="text-xl text-center text-gray-700 font-bold">
              Login
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.signup.name)}>
              <Text className="text-yellow-400 font-semibold">Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
