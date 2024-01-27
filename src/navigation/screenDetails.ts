import CartScreen from '../screens/cart/CartScreen';
import CategoryScreen from '../screens/category/CategoryScreen';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import MyAccountScreen from '../screens/myAccount/MyAccountScreen';
import OrdersScreen from '../screens/orders/OrdersScreen';
import ProductDetailsScreen from '../screens/productDetails/ProductDetailsScreen';
import SignupScreen from '../screens/signup/SignupScreen';
import Welcome from '../screens/welcom/WelcomeScreen';

export const screens = {
  welcome: {
    name: 'WelcomeScreen',
    component: Welcome,
    forAuth: false,
  },
  login: {
    name: 'LoginScreen',
    component: LoginScreen,
    forAuth: false,
  },
  signup: {
    name: 'SignupScreen',
    component: SignupScreen,
    forAuth: false,
  },
  home: {
    name: 'HomeScreen',
    component: HomeScreen,
    forAuth: true,
  },
  category: {
    name: 'CategoryScreen',
    component: CategoryScreen,
    forAuth: true,
  },
  orders: {
    name: 'OrdersScreen',
    component: OrdersScreen,
    forAuth: true,
  },
  cart: {
    name: 'CartScreen',
    component: CartScreen,
    forAuth: true,
  },
  produtDetails: {
    name: 'ProductDetailsScreen',
    component: ProductDetailsScreen,
    forAuth: true,
  },
  myAccount: {
    name: 'MyAccountScreen',
    component: MyAccountScreen,
    forAuth: true,
  },
};
