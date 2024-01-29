import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import BottomTab from '../../components/common/navigation/BottomTab';
import {useDispatch, useSelector} from 'react-redux';
import {getMyCartItems} from '../../redux/features/cartSlice';
import MyCartItemsList from '../../components/cart/MyCartItemsList';
import FullScreenLoader from '../../components/common/ui/FullScreenLoader';

const CartScreen = () => {
  const dispatch = useDispatch();
  const {cartItems, isLoading} = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(getMyCartItems());
  }, []);
  return (
    <View className="flex-1 px-3">
      {isLoading && <FullScreenLoader />}
      {cartItems.length == 0 && (
        <Text className="text-gray-700 text-center">
          You have no items in your cart
        </Text>
      )}
      <ScrollView>
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((item: any) => (
            <MyCartItemsList key={item._id} cart={item} />
          ))}
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default CartScreen;
