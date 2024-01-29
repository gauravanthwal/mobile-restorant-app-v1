import {View, Text, Image, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import BottomTab from '../../components/common/navigation/BottomTab';
import {useDispatch, useSelector} from 'react-redux';
import {getMyOrders} from '../../redux/features/orderSlice';
import MyOrders from '../../components/orders/MyOrders';
import SkalatonOrderScreen from '../../components/common/skeletons/SkalatonOrderScreen';
import {useFocusEffect} from '@react-navigation/native';

const OrdersScreen = () => {
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const {myOrders, isLoading} = useSelector((state: any) => state.order);

  const loadDataOnRefresh = () => {
    setRefreshing(true);
    dispatch(getMyOrders());
  };

  // Get data when component load and there is no items
  useEffect(() => {
    if (myOrders.length == 0) {
      dispatch(getMyOrders());
    }
  }, []);

  // Seting Refreshing value false when data loaded successfully
  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
    }
  }, [isLoading]);

  // If want to get data every time user comes to this screen
  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(getMyOrders());
  //   }, []),
  // );
  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadDataOnRefresh}
          />
        }>
        {isLoading && <SkalatonOrderScreen />}
        {!isLoading && myOrders.length == 0 && (
          <Text className="text-gray-700 text-center">
            You don't have any orders yet.
          </Text>
        )}
        <View className="px-3">
          {!isLoading &&
            myOrders &&
            myOrders.length > 0 &&
            myOrders.map(
              (item: any) =>
                item.product && <MyOrders key={item._id} order={item} />,
            )}
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default OrdersScreen;
