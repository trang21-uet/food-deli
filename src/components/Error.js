import { View, Text, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function Error({ code }) {
  const { colors } = useTheme();
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
    </View>
  );
}
