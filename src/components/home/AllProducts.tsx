import {
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Product from './Product';

const AllProducts = ({allProducts}: any) => {
  return (
    <ScrollView>
      <View className="flex-1 flex-row flex-wrap justify-between mb-20">
        {allProducts &&
          allProducts.length > 0 &&
          allProducts.map((item: any) => (
            <Product key={item._id} item={item} />
          ))}
      </View>
    </ScrollView>
  );
};


export default AllProducts;
