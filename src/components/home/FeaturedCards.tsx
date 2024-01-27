import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';

const image = {
  uri: 'https://w0.peakpx.com/wallpaper/612/979/HD-wallpaper-food-burger.jpg',
};
const FeaturedCards = () => {
  return (
    <View className="flex-1 px-3 my-4">
      <ImageBackground
        source={image}
        resizeMode="cover"
        className="flex-1 justify-center h-[200px]"
        imageStyle={{borderRadius: 20, opacity: .85}}>
        <View className='flex-1 p-4 gap-6 justify-center'>
        <View>
          <Text className='text-2xl font-bold text-white max-w-[150px] '>Explore Our Menu</Text>
        </View>
        <View>
          <TouchableOpacity className='bg-amber-400 w-[120px] py-2  rounded-2xl'>
            <Text className='text-white text-center font-mono text-[16px]'>Explore Now</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FeaturedCards;
