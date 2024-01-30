import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ShoppingCartIcon} from 'react-native-heroicons/outline';
import {addToCart} from '../../redux/features/cartSlice';
import {createNewOrder} from '../../redux/features/orderSlice';
import Toast from 'react-native-toast-message';

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const {selectedProduct} = useSelector((state: any) => state.product);

  const handleAddToCart = () => {
    const payload = {
      product: selectedProduct._id,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };

  const handlePlaceOrder = () => {
    const payload = {
      product_id: selectedProduct._id,
      quantity: 1,
    };
    dispatch(createNewOrder(payload));
  };
  return (
    <View className="flex-1 bg-gray-100">
      <View className=" flex-row justify-center my-2">
        {selectedProduct?.product_photo && (
          <Image
            source={{uri: selectedProduct?.product_photo}}
            className="h-[300px] w-[300px] rounded-xl"
          />
        )}
      </View>

      <View className="px-6 my-4">
        {selectedProduct?.product_name && (
          <Text className="text-gray-700 text-xl font-semibold">
            {selectedProduct?.product_name}
          </Text>
        )}
        {selectedProduct?.price && (
          <Text className="text-gray-900 text-lg  mt-2">
            ${parseInt(selectedProduct?.price).toFixed(2)}
          </Text>
        )}
      </View>

      <View className="absolute bottom-5 w-full px-6">
        <View className=" flex flex-row justify-between gap-2">
          <TouchableOpacity
            onPress={handleAddToCart}
            className="bg-gray-200 px-8 flex-row justify-center items-center rounded-2xl">
            <ShoppingCartIcon size={25} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePlaceOrder}
            className="bg-yellow-400 flex-1 py-4 rounded-2xl">
            <Text className="font-bold text-white text-center text-lg">
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
