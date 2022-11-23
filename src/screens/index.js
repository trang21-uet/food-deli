import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './home';
import Search from './search';
import Settings from './settings';
import { Cart, CheckoutScreen, CouponList, RestaurantList } from './food';
import { Login, Register, ForgotPassword } from './auth';
import Nav from './Nav';
import { Header } from '../components';

const Tab = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{ header: () => <Header /> }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='CouponList' component={CouponList} />
        <Tab.Screen name='RestaurantList' component={RestaurantList} />
      </Tab.Navigator>
      <Nav />
    </View>
  );
}

export { Home, Search, Settings, Login, Register, ForgotPassword };
