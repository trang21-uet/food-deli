import { StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {
  MainScreen,
  Login,
  Register,
  ForgotPassword,
  Otp,
  ResetPassword,
  Detail,
  OrderManagement,
  OrderDetail,
  OrderStatus,
  OrderConfirm,
  Restaurant,
  SearchCategory,
  AddressManager,
  CreateAddress,
  EditAddress,
  ChangeAddress,
  Intro,
  Help,
} from './src';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackButton } from './src/components';
import { setCustomText } from 'react-native-global-props';
import { NavContext } from './src/providers';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    gray: 'gray',
  },
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [screen, setScreen] = useState('Home');
  const [fontsLoaded] = useFonts({
    Linotte: require('./src/assets/font/Linotte/Linotte-Regular.ttf'),
    'Linotte-Bold': require('./src/assets/font/Linotte/Linotte-Bold.ttf'),
    'Linotte-Heavy': require('./src/assets/font/Linotte/Linotte-Heavy.ttf'),
    'Linotte-SemiBold': require('./src/assets/font/Linotte/Linotte-SemiBold.ttf'),
  });

  useEffect(() => {
    const init = async () => {
      await AsyncStorage.setItem('cart', JSON.stringify(null));
    };
    init();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setCustomText({ style: { fontFamily: 'Linotte' } });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <NavContext.Provider value={{ screen, setScreen }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          onLayout={onLayoutRootView}
        >
          <Stack.Navigator
            initialRouteName='MainScreen'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='MainScreen' component={MainScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Otp' component={Otp} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
            <Stack.Screen
              name='OrderConfirm'
              component={OrderConfirm}
              options={{
                title: 'Xác nhận mua hàng',
                headerShown: true,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
            />
            <Stack.Screen
              name='DishDetail'
              component={Detail}
              options={{
                title: '',
                headerShown: true,
                headerTransparent: true,
                headerLeft: () => <BackButton />,
              }}
            />
            <Stack.Screen
              name='Restaurant'
              component={Restaurant}
              options={{
                title: '',
                headerShown: true,
                headerTransparent: true,
                headerLeft: () => <BackButton />,
              }}
            />
            <Stack.Screen
              name='OrderManagement'
              options={{
                headerShown: true,
                title: 'Quản lý đơn hàng',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={OrderManagement}
            />
            <Stack.Screen
              name='SearchCategory'
              options={({ route }) => ({
                headerShown: true,
                title: route.params.name,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
                headerRight: () => (
                  <TouchableOpacity>
                    <FontAwesome name='filter' size={20} />
                  </TouchableOpacity>
                ),
              })}
              component={SearchCategory}
            />
            <Stack.Screen
              name='OrderDetail'
              options={{
                headerShown: true,
                title: 'Thông tin đơn hàng',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: {
                  fontWeight: '200',
                },
              }}
              component={OrderDetail}
            />
            <Stack.Screen
              name='OrderStatus'
              options={{
                title: 'Tình trạng đơn hàng',
                headerShown: true,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={OrderStatus}
            />
            <Stack.Screen
              name='AddressManager'
              options={{
                title: 'Địa chỉ của tôi',
                headerShown: true,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: {
                  fontFamily: 'Linotte-Bold',
                },
              }}
              component={AddressManager}
            />
            <Stack.Screen
              name='CreateAddress'
              options={{
                title: 'Tạo địa chỉ mới',
                headerShown: 'true',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={CreateAddress}
            />
            <Stack.Screen
              name='EditAddress'
              options={{
                title: 'Thay đổi địa chỉ',
                headerShown: 'true',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={EditAddress}
            />
            <Stack.Screen
              name='ChangeAddress'
              options={{
                title: 'Thay đổi địa chỉ',
                headerShown: 'true',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={ChangeAddress}
            />
            <Stack.Screen
              name='Intro'
              options={{
                title: 'Giới thiệu ứng dụng',
                headerShown: 'true',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={Intro}
            />
            <Stack.Screen
              name='Help'
              options={{
                title: 'Hướng dẫn',
                headerShown: 'true',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Linotte-Bold' },
              }}
              component={Help}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavContext.Provider>
    </NavigationContainer>
  );
}
