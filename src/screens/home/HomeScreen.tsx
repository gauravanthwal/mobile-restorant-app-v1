import {
  View,
  Text,
  Button,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
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
import SkalatonCartScreen from '../../components/common/skeletons/SkalatonCartScreen';
import SkalatonProducts from '../../components/common/skeletons/home/SkalatonProducts';
import HomeBaseSkalaton from '../../components/common/skeletons/home/HomeBaseSkalaton';
import SkalatonUserProfile from '../../components/common/skeletons/home/SkalatonUserProfile';
import {getMyCartItems} from '../../redux/features/cartSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [loadBanner, setLoadBanner] = useState(true);

  const {allProducts, isLoading} = useSelector((state: any) => state.product);

  // Load data on refresh
  const loadDataOnRefresh = () => {
    setRefreshing(true);
    setLoadBanner(true);
    dispatch(getAllProducts());
  };

  // Set refreshing false
  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
      removeBannerSkalaton();
    }
  }, [isLoading]);

  // Load initial data
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getMyCartItems());
    removeBannerSkalaton();
  }, []);

  const removeBannerSkalaton = () => {
    setTimeout(() => {
      setLoadBanner(false);
    }, 500);
  };

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadDataOnRefresh}
          />
        }>
        {loadBanner ? (
          <SkalatonUserProfile />
        ) : (
          <>
            <UserProfile />
            <SearchProducts />
            <FeaturedCards />
          </>
        )}
        {isLoading ? (
          <SkalatonProducts />
        ) : (
          <>
            {allProducts && allProducts.length > 0 && (
              <AllProducts allProducts={allProducts} isLoading={isLoading} />
            )}
          </>
        )}
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default HomeScreen;
