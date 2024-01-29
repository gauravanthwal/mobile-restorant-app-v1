import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const HeaderLeftArrow = () => {
    const navigation = useNavigation()

    const goBack = () =>{
        navigation.goBack()
    }
  return (
    <View className="bg-gray-200 p-2 my-4 rounded-full">
      <TouchableOpacity onPress={goBack}>
        <ChevronLeftIcon size={25} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeftArrow;
