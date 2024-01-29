import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TrashIcon} from 'react-native-heroicons/outline';
const MyCartItemsList = ({cart}: any) => {
  return (
    <Pressable>
      <View className="bg-gray-50 my-2 p-4 pb-2 rounded-xl flex-row shadow-md">
        {/* Image view */}
        <View>
          <Image
            source={{uri: cart?.product?.product_photo}}
            className="w-[80px] h-[80px] rounded-2xl"
          />
          <Text className="text-gray-500 text-sm font-semibold">
            Qty {cart?.quantity}
          </Text>
        </View>
        {/* Content view */}
        <View className="mx-4 flex-row flex-1 justify-between ">
          <View>
            <Text className="text-xl font-bold text-gray-700 my-1">
              {cart?.product?.product_name}
            </Text>
            <Text className="text-gray-600 text-base font-semibold">
              ${cart?.product?.price}
            </Text>
          </View>
          <View className="flex justify-end">
            <TouchableOpacity>
              <TrashIcon size={25} color={'#fb7185'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MyCartItemsList;
