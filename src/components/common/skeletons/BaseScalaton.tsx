import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

type BaseScalatonPropsType = {
  height: number;
  width: number | string;
};

const BaseScalaton = ({height, width}: BaseScalatonPropsType) => {
  return (
    <View className='px-3'>
        
    </View>
  );
};

const Skalaton = () =>{
    return(
        <View></View>
    )
}

const SkalatonWithAnimation = ({height, width}: any) => {
  const opacity = useRef(new Animated.Value(0.8));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.8,
          useNativeDriver: true,
          duration: 600,
        }),
      ]),
    ).start();
  });
  return (
    <Animated.View
      style={[
        {opacity: opacity.current, height, width},
        {backgroundColor: '#e2e8f0', borderRadius: 20, marginBottom: 8, marginTop: 8},
      ]}></Animated.View>
  );
};

export default BaseScalaton;
