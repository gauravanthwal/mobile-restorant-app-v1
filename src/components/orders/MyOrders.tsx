import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {checkStatus} from '../../common/helper/checkStatus';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setSelectedProduct } from '../../redux/features/productSlice';
import { screens } from '../../navigation/screenDetails';

const MyOrders = ({order}: any) => {
  const dispatch = useDispatch();
  const navigation:any = useNavigation()

  const showOrderedProductDetails = () =>{
    dispatch(setSelectedProduct(order?.product));
    navigation.navigate(screens.produtDetails.name);
  }

  return (
    <Pressable onPress={showOrderedProductDetails}>
      <View
        className="bg-gray-50 my-2 p-4 pb-2 rounded-xl flex-row shadow-md">
        <View>
          <Image
            source={{uri: order?.product?.product_photo}}
            className="w-[80px] h-[80px] rounded-2xl"
          />
          <Text className="text-gray-500 text-sm font-semibold">
            Qty {order?.quantity}
          </Text>
        </View>
        <View className="mx-4 flex-row flex-1 justify-between ">
          <View>
            <Text className="text-xl font-bold text-gray-700 my-1">
              {order?.product?.product_name}
            </Text>
            <Text className="text-gray-600 text-base font-semibold">
              ${order?.product?.price}
            </Text>
          </View>
          <View className=' flex justify-center'>
            <Text className='rounded-lg px-1 py-[2px] text-white text-sm' style={{backgroundColor: checkStatus(order?.order_status)}}>
              {order?.order_status}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MyOrders;
