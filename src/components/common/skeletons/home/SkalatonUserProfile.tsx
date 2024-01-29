import {View, Text} from 'react-native';
import React from 'react';

const SkalatonUserProfile = () => {
  return (
    <View className="px-3">
      <ProfileSkalaton />
      <BannerSkalaton />
    </View>
  );
};

const ProfileSkalaton = () => {
  return (
    <View className="">
      {/* User profile and notification icon */}
      <View className="flex-row justify-between">
        <View
          className={`bg-gray-200 h-[40px] w-[50%] rounded-3xl my-2 `}></View>
        <View
          className={`bg-gray-200 h-[40px] w-[40px] rounded-full my-2 `}></View>
      </View>
      {/* Text space */}
      <View
        className={`bg-gray-200 h-[25px] w-[70%] rounded-3xl flex-1`}></View>
      {/* Search input and button */}
      <View className="flex-row justify-between">
        <View
          className={`bg-gray-200 h-[40px] w-[80%] rounded-3xl my-2 flex-1`}></View>
        <View
          className={`bg-gray-200 h-[40px] w-[70px] rounded-3xl my-2 ml-4`}></View>
      </View>
    </View>
  );
};

const BannerSkalaton = () => {
  return <View className={`bg-gray-200 h-[200px] mb-4 mt-2 rounded-3xl`}></View>;
};

export default SkalatonUserProfile;
