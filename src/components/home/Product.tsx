import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/solid';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/screenDetails';
import {useDispatch} from 'react-redux';
import {setSelectedProduct} from '../../redux/features/productSlice';
import { addToCart } from '../../redux/features/cartSlice';

const Product = ({item}: any) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const showProductDetails = () => {
    dispatch(setSelectedProduct(item));
    navigation.navigate(screens.produtDetails.name);
  };

  const handleAddToCart = () => {
    const payload = {
      product: item?._id,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };
  return (
    <View
      key={item._id}
      className="bg-white m-2 w-[45%] rounded-xl pt-5 pb-2 px-4">
      <Pressable onPress={showProductDetails}>
        <View className=" flex-1 justify-center flex-row">
          <Image
            source={{uri: item?.product_photo}}
            height={150}
            width={150}
            className="rounded-xl"
          />
        </View>
        <View className="px-2">
          <Text className="text-[17px] text-gray-600 mt-4 mb-2 font-semibold">
            {item?.product_name}
          </Text>
        </View>
        <View className="px-2 flex-1 flex-row justify-between  items-center">
          <View>
            <Text className="text-lg font-bold text-gray-600">
              ${item?.price}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleAddToCart} className="bg-gray-600 p-2 rounded-full">
              <PlusIcon size={15} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default Product;
