import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './home';
import Search from './search';
import Settings from './settings';
import { Cart, CouponList, RestaurantList } from './food';
import { Login, Register, ForgotPassword, ResetPassword, Otp } from './auth';
import { AddressManager, CreateAddress } from './address';
import Detail from './detail';
import {
  OrderDetail,
  OrderManagement,
  OrderStatus,
  OrderConfirm,
} from './orders';
import Restaurant from './restaurant';
import Nav from './Nav';

const Tab = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='CouponList' component={CouponList} />
        <Tab.Screen name='RestaurantList' component={RestaurantList} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
      <Nav />
    </View>
  );
}

export {
  Home,
  Search,
  Settings,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Otp,
  Restaurant,
  AddressManager,
  CreateAddress,
  Detail,
  OrderDetail,
  OrderConfirm,
  OrderManagement,
  OrderStatus,
};
