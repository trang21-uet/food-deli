import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './home';
import Search from './search';
import Settings, { Intro, Help, ChangeInfo } from './settings';
import { Cart, CouponList, RestaurantList } from './food';
import { Login, Register, ForgotPassword, ResetPassword, Otp } from './auth';
import { AddressManager, CreateAddress, EditAddress } from './address';
import Detail from './detail';
import {
  OrderDetail,
  OrderManagement,
  OrderStatus,
  OrderConfirm,
  ChangeAddress,
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
  Intro,
  Help,
  Restaurant,
  AddressManager,
  CreateAddress,
  ChangeAddress,
  EditAddress,
  Detail,
  ChangeInfo,
  OrderDetail,
  OrderConfirm,
  OrderManagement,
  OrderStatus,
};
