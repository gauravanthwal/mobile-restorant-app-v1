import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import BottomTab from '../../components/common/navigation/BottomTab';
import {useDispatch, useSelector} from 'react-redux';
import {getMyCartItems} from '../../redux/features/cartSlice';
import MyCartItemsList from '../../components/cart/MyCartItemsList';
import SkalatonCartScreen from '../../components/common/skeletons/SkalatonCartScreen';
import {useFocusEffect} from '@react-navigation/native';
import FullScreenLoader from '../../components/common/ui/FullScreenLoader';

const CartScreen = () => {
  const dispatch = useDispatch();
  const [isRemovingCartItem, setIsRemovingCartItem] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {cartItems, isLoading} = useSelector((state: any) => state.cart);

  const loadDataOnRefresh = () => {
    setRefreshing(true);
    dispatch(getMyCartItems());
  };

  // Get data when component load and there is no items
  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
    }
    if (!isLoading) {
      setIsRemovingCartItem(false);
    }
  }, [isLoading]);

  // Seting Refreshing value false when data loaded successfully
  useEffect(() => {
    if (cartItems.length == 0) {
      dispatch(getMyCartItems());
    }
  }, []);

  // If want to get data every time user comes to this screen
  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(getMyCartItems());
  //   }, []),
  // );
  return (
    <View className="flex-1">
      {isRemovingCartItem && <FullScreenLoader />}
      {isLoading && !isRemovingCartItem && <SkalatonCartScreen />}
      {!isLoading && cartItems.length == 0 && (
        <Text className="text-gray-700 text-center">
          You have no items in your cart
        </Text>
      )}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadDataOnRefresh}
          />
        }>
        <View className="px-3 mb-16">
          {!isLoading &&
            cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item: any) => (
              <MyCartItemsList
                key={item._id}
                cart={item}
                setIsRemovingCartItem={setIsRemovingCartItem}
              />
            ))}
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default CartScreen;
