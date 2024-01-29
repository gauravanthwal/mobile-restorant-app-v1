import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {themeColors} from '../../theme';
import LoginWithServices from '../../components/login/LoginWithServices';
import {screens} from '../../navigation/screenDetails';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/features/authSlice';

const SignupScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const {errorMessage, isUserCreatedSuccess} = useSelector(
    (state: any) => state.auth,
  );

  const [formVal, setFormVal] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const {email, password, fullName} = formVal;

  const onSubmit = () => {
    if (!email || !password || !fullName) {
      Alert.alert('All fields are required');
      return;
    }
    const payload = {email, password, first_name: fullName};
    dispatch(registerUser(payload));
    // navigation.navigate(screens.login.name)
  };

  useEffect(() => {
    if (errorMessage) {
      Alert.alert(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (isUserCreatedSuccess) {
      navigation.navigate(screens.login.name, {isUserCreatedSuccess: true});
    }
  }, [isUserCreatedSuccess]);

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
          source={require('../../assets/images/signup.png')}
          style={{width: 180, height: 110}}
        />
      </View>

      <View
        className="flex-1 bg-white"
        style={{borderTopEndRadius: 50, borderTopStartRadius: 50}}>
        {/* Form Start */}
        <View className="form">
          <View className="flex px-8 mt-6">
            <Text className="px-2 mb-1 text-gray-700">Full Name</Text>
            <TextInput
              placeholder="John Doe"
              placeholderTextColor={'#6b7280'}
              value={formVal.fullName}
              onChangeText={newText =>
                setFormVal({...formVal, fullName: newText})
              }
              className="bg-gray-200 text-gray-700 rounded-2xl px-4 text-base"
            />
          </View>
          <View className="flex px-8 mt-4">
            <Text className="px-2 mb-1 text-gray-700">Email</Text>
            <TextInput
              placeholder="john.doe@gmail.com"
              placeholderTextColor={'#6b7280'}
              value={formVal.email}
              onChangeText={newText => setFormVal({...formVal, email: newText})}
              className="bg-gray-200 rounded-2xl px-4 text-base text-gray-700"
            />
          </View>
          <View className="flex px-8 mt-4">
            <Text className="px-2 mb-1 text-gray-700">Password</Text>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={'#6b7280'}
              secureTextEntry
              value={formVal.password}
              onChangeText={newText =>
                setFormVal({...formVal, password: newText})
              }
              className="bg-gray-200 rounded-2xl px-4 text-base text-gray-700"
            />
          </View>

          {/* Action Buttons */}
          <View className="px-8  mt-7">
            <TouchableOpacity
              onPress={onSubmit}
              className="bg-yellow-400 py-2 rounded-xl">
              <Text className="text-lg text-gray-700 text-center font-bold">
                Sign Up
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
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.login.name)}>
              <Text className="text-yellow-400 font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
