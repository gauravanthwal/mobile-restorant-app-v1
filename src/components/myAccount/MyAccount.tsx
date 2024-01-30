import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Profile from './Profile';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/features/authSlice';
import { removeFromStorage } from '../../common/helper/storage';
import { resetCartsReducer } from '../../redux/features/cartSlice';
import { resetOrderReducer } from '../../redux/features/orderSlice';
import { resetProductReducer } from '../../redux/features/productSlice';

const MyAccount = () => {
  const dispatch = useDispatch();

  const userLogout = async() => {
    // await removeFromStorage('token')

    dispatch(logout());
    dispatch(resetCartsReducer());
    dispatch(resetOrderReducer());
    dispatch(resetProductReducer())
  };
  return (
    <View>
      <Profile />
      <Pressable
        onPress={userLogout}
        className="bg-amber-500 p-3 rounded-lg shadow-md w-1/2 mx-auto flex-row items-center justify-center">
        <ArrowLeftIcon size={20} color={'#fff'} />
        <Text className="text-white text-center text-base font-bold mx-2">
          Logout
        </Text>
      </Pressable>
      <Text className="text-center text-sm my-2">App Version 0.0.1</Text>
    </View>
  );
};

export default MyAccount;
