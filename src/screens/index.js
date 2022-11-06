import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './home';
import Search from './search';
import Settings from './settings';
import MyOrder from './order/MyOrder';
import { Login, Register } from './auth';

const Tab = createNativeStackNavigator();

export default function MainScreen({ navShown }) {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='MyOrder' component={MyOrder} />
      </Tab.Navigator>
    </View>
  );
}

export { Home, Search, Settings, Login, Register };
