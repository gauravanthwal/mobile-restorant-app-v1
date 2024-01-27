import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {themeColors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/screenDetails';
import LoginWithServices from '../../components/login/LoginWithServices';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/features/authSlice';

const LoginScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {errorMessage} = useSelector((state: any) => state.auth);
  const [formVal, setFormVal] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formVal;

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert('All fields are required');
      return;
    }
    dispatch(loginUser(formVal));
  };

  useEffect(() => {
    if (errorMessage) {
      Alert.alert(errorMessage);
    }
  }, [errorMessage]);
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <View className="flex-row justify-start p-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-yellow-400 p-3 rounded-tr-2xl rounded-bl-2xl">
          <ArrowLeftIcon size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View className="flex items-center justify-center pb-6">
        <Image
          source={require('../../assets/images/login.png')}
          style={{width: 200, height: 200}}
        />
      </View>

      <View
        className="flex-1 bg-white"
        style={{borderTopEndRadius: 50, borderTopStartRadius: 50}}>
        {/* Form Start */}
        <View className="form">
          <View className="flex px-8 mt-6">
            <Text className="px-2 mb-1 text-gray-700">Email</Text>
            <TextInput
              placeholder="john.doe@gmail.com"
              placeholderTextColor={"#6b7280"}
              value={formVal.email}
              onChangeText={newText => setFormVal({...formVal, email: newText})}
              className="bg-gray-200 rounded-2xl px-4 text-base text-gray-700"
            />
          </View>
          <View className="flex px-8 mt-6">
            <Text className="px-2 mb-1 text-gray-700">Password</Text>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={"#6b7280"}
              secureTextEntry
              value={formVal.password}
              onChangeText={newText =>
                setFormVal({...formVal, password: newText})
              }
              className="bg-gray-200 rounded-2xl px-4 text-base text-gray-700"
            />
          </View>

          {/* Action Buttons */}
          <View className="px-8 flex items-end mt-2">
            <TouchableOpacity>
              <Text className="text-sm text-gray-700">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View className="px-8  mt-2">
            <TouchableOpacity
              className="bg-yellow-400 py-2 rounded-xl"
              onPress={onSubmit}>
              <Text className="text-lg text-gray-700 text-center font-bold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-lg text-gray-700 text-center my-4 font-semibold">
            OR
          </Text>
          {/* Login with Services */}
          <LoginWithServices />

          <View className="flex-row justify-center my-6">
            <Text className="text-gray-700 font-semibold">
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.signup.name)}>
              <Text className="text-yellow-400 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
