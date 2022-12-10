import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import numberWithCommas from '../../../constants/function';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderCollapse = ({ foods, name, setData, data }) => {
  const price = foods
    .map(({ food }) => food.price)
    .reduce((prev, cur) => prev + cur);

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
            {name}
          </Text>
        </View>
        <Text>
          <Text
            style={{
              fontSize: 13,
              color: 'gray',
            }}
          >
            {foods.map(({ food }) => food.name).join(', ')}
          </Text>
          <Text style={{ color: 'gray' }}> ({foods.length} sản phẩm)</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>{numberWithCommas(price)} Đ</Text>
      </View>
      <TouchableOpacity
        onPress={async () => {
          setData(data.filter(item => item.name !== name));
          await AsyncStorage.setItem(
            'cart',
            JSON.stringify(data.filter(item => item.name !== name))
          );
        }}
      >
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
