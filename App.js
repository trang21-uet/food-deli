import { StatusBar, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Settings, MainScreen, Login, Register } from './src';
import { ForgotPassword } from './src/screens';

const Stack = createNativeStackNavigator();

const theme = {
  dark: false,
  colors: {
    primary: '#fd7a5c',
    background: '#f3f4f8',
    text: '#000',
    card: '#fff',
    white: '#fff',
    black: '#000',
  },
};

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='Settings' component={Settings} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
