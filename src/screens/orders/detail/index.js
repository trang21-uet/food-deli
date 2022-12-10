import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ItemFood from './ItemFood';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import Review from './review/index.js';
import numberWithCommas from '../../../constants/function';
import { host } from '../../../constants/Data';
import { Loading } from '../../../components';

export default function OrderDetail() {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { id, price } = useRoute().params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const request = async () => {
    try {
      const response = await fetch(host + '/api/orders?id=' + id);
      const json = await response.json();
      setData(json);
      // console.log(json);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
          Mã đơn hàng:
        </Text>
        <Text style={{ marginBottom: 5, color: colors.gray }}>{data.code}</Text>
        <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
          Địa chỉ nhận hàng:
        </Text>
        <Text style={{ marginBottom: 5, color: colors.gray }}>
          {data.address}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
            Trạng thái:
            <Text
              style={{
                fontFamily: 'Linotte',
                fontSize: 14,
                color: colors.gray,
              }}
            >
              {' '}
              {data.status.name}
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.btn1}
            activeOpacity={0.8}
            onPress={() => nav.navigate('OrderStatus', { id })}
          >
            <Text style={{ ...styles.title, color: 'white' }}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listFood}>
        {data.foods.map((item, index) => (
          <ItemFood key={index} {...item} />
        ))}
      </View>
      <View
        style={{ height: 10, borderBottomWidth: 1, borderColor: '#e1e1e1' }}
      ></View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 16, fontFamily: 'Linotte-SemiBold' }}>
          Thành tiền:
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.primary,
            fontFamily: 'Linotte-SemiBold',
          }}
        >
          {numberWithCommas(price)} Đ
        </Text>
      </View>
      {data.status.id === 6 && <Review id={id} />}
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
      paddingTop: 2,
      paddingBottom: 5,
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
