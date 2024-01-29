import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import BottomTab from '../../components/common/navigation/BottomTab';
import {getMyOrdersService} from '../../common/services/orderServices';
import {useDispatch, useSelector} from 'react-redux';
import {getMyOrders} from '../../redux/features/orderSlice';
import {url} from 'inspector';
import MyOrders from '../../components/orders/MyOrders';
import FullScreenLoader from '../../components/common/ui/FullScreenLoader';
import BaseScalaton from '../../components/common/skeletons/BaseScalaton';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const {myOrders, isLoading} = useSelector((state: any) => state.order);

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView>
        {/* {isLoading && <FullScreenLoader />} */}
        {true && <BaseScalaton width={'100%'} height={120}/>}
        {myOrders.length == 0 && (
          <Text className="text-gray-700 text-center">
            You don't have any orders yet.
          </Text>
        )}
        <View className="px-3">
          {myOrders &&
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
