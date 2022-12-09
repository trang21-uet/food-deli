import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ItemFood from './ItemFood';
import { useNavigation, useTheme } from '@react-navigation/native';
import Review from './review/index.js';

export default function OrderDetail() {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>Mã đơn hàng: HKJKHH988</Text>
        <Text>Địa chỉ nhận hàng: Thổ Quan, Đống Đa, Hà Nội</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>Trạng thái: Đang giao</Text>
          <TouchableOpacity
            style={styles.btn1}
            activeOpacity={0.8}
            onPress={() => nav.navigate('OrderStatus')}
          >
            <Text style={{ ...styles.title, color: 'white' }}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listFood}>
        <ItemFood />
        <ItemFood />
        <ItemFood />
        <ItemFood />
        <ItemFood />
      </View>
      <View
        style={{ height: 10, borderBottomWidth: 1, borderColor: '#e1e1e1' }}
      ></View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 16 }}>Thành tiền:</Text>
        <Text style={{ fontSize: 16 }}>1.000.000 Đ</Text>
      </View>
      <Review />
    </ScrollView>
  );
}

const getStyles = colors =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },

    header: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: '#e1e1e1',
    },
    btn1: {
      backgroundColor: colors.primary,
      paddingVertical: 2,
      paddingHorizontal: 10,
      borderRadius: 5,
    },

    listFood: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 5,
      marginTop: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
  });
