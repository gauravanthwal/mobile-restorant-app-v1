import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';

const SearchProducts = () => {
  return (
    <View className="flex-1 px-3">
      <Text className="text-lg text-gray-700 font-bold my-2 px-1">
        Search your favorite food
      </Text>
      <View className="flex-1 flex-row gap-2">
        <View className="flex-1">
          <TextInput
            className="rounded-3xl bg-gray-200 px-4 text-base text-black"
            placeholder="Search"
            placeholderTextColor={'#4b5563'}
          />
        </View>
        <View className="w-[70px] ">
          <TouchableOpacity className="flex-1 bg-amber-400 w-full flex justify-center items-center rounded-3xl">
            <MagnifyingGlassIcon size={25} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchProducts;
