import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Settings, MainScreen, Login, Register } from './src';

const Stack = createNativeStackNavigator();

const theme = {
  dark: false,
  colors: {
    primary: '#fd7a5c',
    background: '#f3f4f8',
    // background: '#fff',
    text: '#000',
    card: '#fff',
    white: '#fff',
    black: '#000',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
