import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from './screenDetails';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import HeaderLeftArrow from '../components/common/navigation/HeaderLeftArrow';
import Header from '../components/common/navigation/Header';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  let {isLoggedIn} = useSelector((state: any) => state.auth);
  return (
    <Stack.Navigator
      initialRouteName={screens.login.name}
      screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name={screens.home.name}
            component={screens.home.component}
          />
          <Stack.Screen
            name={screens.orders.name}
            component={screens.orders.component}
            options={{
              headerShown: true,
              title: 'My Orders',
              headerShadowVisible: false,
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#f3f4f6',
              },
              headerLeft: () => <HeaderLeftArrow />,
            }}
          />
          <Stack.Screen
            name={screens.cart.name}
            component={screens.cart.component}
            options={{
              headerShown: true,
              title: 'My Cart',
              headerShadowVisible: false,
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#f3f4f6',
              },
              headerLeft: () => <HeaderLeftArrow />,
            }}
          />
          <Stack.Screen
            name={screens.produtDetails.name}
            component={screens.produtDetails.component}
            options={{
              headerShown: true,
              title: '',
              headerShadowVisible: false,
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: '#f3f4f6'
              },
              headerLeft: () => <HeaderLeftArrow />,
            }}
          />
          <Stack.Screen
            name={screens.myAccount.name}
            component={screens.myAccount.component}
          />
          <Stack.Screen
            name={screens.category.name}
            component={screens.category.component}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={screens.login.name}
            component={screens.login.component}
          />
          <Stack.Screen
            name={screens.signup.name}
            component={screens.signup.component}
          />
          <Stack.Screen
            name={screens.welcome.name}
            component={screens.welcome.component}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
