import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from './screenDetails';

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={screens.home.name}>
      <Tab.Screen
        name={screens.home.name}
        component={screens.home.component}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name={screens.orders.name}
        component={screens.orders.component}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name={screens.cart.name}
        component={screens.cart.component}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name={screens.myAccount.name}
        component={screens.myAccount.component}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
