import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Materialicons from 'react-native-vector-icons/MaterialIcons';

const OrderCollapse = () => {
  return (
    <View style={styles.order}>
      <View style={styles.orderleft}>
        <View style={{ flexDirection: 'row' }}>
          <Materialicons
            name='storefront'
            size={22}
            color={'gray'}
            activeOpacity={0.8}
          />
          <Text
            style={{
              fontFamily: 'Linotte-SemiBold',
              fontSize: 16,
              marginTop: -3,
              marginLeft: 5,
            }}
          >
            KFC Hà Đông
          </Text>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: 'gray',
          }}
        >
          Gà chiên xù, Bánh cá,...(10 sản phẩm)
        </Text>
        <Text style={{ fontSize: 16 }}>500.000 Đ</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.title}>Xoá</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderCollapse;

const styles = StyleSheet.create({
  title: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
  order: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  orderleft: {
    flex: 1,
  },
  address: {
    flexDirection: 'row',
  },
});
