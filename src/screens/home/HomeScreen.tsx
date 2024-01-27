import {View, Text, Button, StatusBar, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/features/authSlice';
import BottomTab from '../../components/common/navigation/BottomTab';
import {getFromStorage} from '../../common/helper/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllProducts} from '../../redux/features/productSlice';
import FeaturedCards from '../../components/home/FeaturedCards';
import AllProducts from '../../components/home/AllProducts';
import UserProfile from '../../components/home/UserProfile';
import SearchProducts from '../../components/home/SearchProducts';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {allProducts} = useSelector((state: any) => state.product);

  // console.log('products ', allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView>
        <UserProfile/>
        <SearchProducts/>
        <FeaturedCards />
        {allProducts && allProducts.length > 0 && (
          <AllProducts allProducts={allProducts} />
        )}
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default HomeScreen;
