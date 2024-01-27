import {View, Text, Image} from 'react-native';
import React from 'react';
import {EnvelopeIcon, PhoneIcon} from 'react-native-heroicons/solid';

const img =
  'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais';
const Profile = () => {
  return (
    <View className="my-3">
      <View className="flex items-center">
        <Image
          className="w-[100px] h-[100px] rounded-full"
          source={{uri: img}}
        />
        <View className="my-2">
          <Text className="text-center text-gray-600 font-semibold text-base">
            Gaurav{' '}
          </Text>
          <View className="flex-row gap-2 items-center my-1">
            <EnvelopeIcon size={20} color={'#374151'} />
            <Text className="font-semibold text-gray-600 text-base">
              me@gmail.com
            </Text>
          </View>
          <View className="flex-row gap-2 items-center my-1">
            <PhoneIcon size={20} color={'#374151'} />
            <Text className="font-semibold text-gray-600 text-base">---</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
