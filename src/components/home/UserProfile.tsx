import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BellIcon} from 'react-native-heroicons/outline';

const img =
  'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais';
const UserProfile = () => {
  return (
    <View className="px-3 flex-1 flex-row justify-between mt-2">
      <View className="flex-1 flex-row items-center gap-2">
        <Image
          source={{uri: img}}
          width={55}
          height={55}
          className="rounded-full"
        />
        <Text className="text-base text-gray-800">Hello, User</Text>
      </View>
      <View className="flex-row justify-center items-center">
        <TouchableOpacity className="bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <BellIcon size={25} color={'#1f2937'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;
