import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import MyButton from './MyButton';

export default function Error({ code }) {
  const { colors } = useTheme();
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {code === 'empty-cart' && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 100, height: 100, tintColor: colors.primary }}
            resizeMode={'contain'}
            source={require('../assets/images/empty-cart.png')}
          />
          <Text style={{ fontSize: 30, fontFamily: 'Linotte-SemiBold' }}>
            Giỏ hàng trống
          </Text>
        </View>
      )}

      {code === 'login' && (
        <>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Linotte-SemiBold',
              marginVertical: 10,
            }}
          >
            Bạn chưa đăng nhập
          </Text>
          <MyButton
            style={{
              borderRadius: 10,
              backgroundColor: colors.primary,
              paddingBottom: 10,
              paddingTop: 7,
              paddingHorizontal: 15,
              marginVertical: 15,
            }}
            title='Đăng nhập'
            textStyle={{
              fontSize: 15,
              color: colors.white,
              textTransform: 'uppercase',
            }}
            onPress={() => nav.navigate('Login')}
          />
        </>
      )}
    </View>
  );
}
