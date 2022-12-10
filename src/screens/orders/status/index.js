import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import ItemStatus from './ItemStatus';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { Loading, MyButton } from '../../../components';
import { host } from '../../../constants/Data';
import { useNav } from '../../../providers';

const status = [
  {
    id: 1,
    name: 'Chờ xác nhận',
    description: 'Đơn hàng đang chờ cửa hàng xác nhận',
  },
  {
    id: 2,
    name: 'Đang chuẩn bị hàng',
    description: 'Đơn hàng được xác nhận và cửa hàng đang chuẩn bị háng',
  },
  {
    id: 3,
    name: 'Gửi cho bên vận chuyển',
    description: 'Đơn hàng chuẩn bị xong và gửi cho bên bên vận chuyển ',
  },
  {
    id: 4,
    name: 'Đang vận chuyển',
    description: 'Đơn hàng đang được vận chuyển tới địa chỉ của bạn',
  },
  {
    id: 5,
    name: 'Giao thành công',
    description: 'Đơn hàng được giao tới người dùng thành công',
  },
  {
    id: 6,
    name: 'Đánh giá',
    description: 'Đánh giá mức độ hài lòng của bạn đối với đơn hàng',
  },
  {
    id: 7,
    name: 'Hoàn thành',
    description: 'Đơn hàng của bạn đã hoàn thành',
  },
];

export default function OrderStatus() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { id } = useRoute().params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const nav = useNavigation();
  const { setScreen } = useNav();

  const request = async () => {
    try {
      const response = await fetch(host + '/api/orders/' + id + '/statuses');
      const json = await response.json();

      setData(json);
      setLoading(false);
      console.log(json);
    } catch (error) {}
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      {data.map((item, index) => (
        <ItemStatus key={index} {...item} active={true} />
      ))}
      {status
        .filter(item => {
          return !data.map(({ status }) => status.id).includes(item.id);
        })
        .map((item, index) => (
          <ItemStatus
            key={index}
            status={{ name: item.name, description: item.description }}
            active={false}
          />
        ))}
      <MyButton
        style={styles.btn}
        title='Về trang chủ'
        textStyle={{
          fontFamily: 'Linotte-SemiBold',
          fontSize: 16,
          color: colors.white,
          textTransform: 'uppercase',
        }}
        onPress={() => {
          setScreen('Home');
          nav.navigate('Home');
        }}
      />
    </View>
  );
}

const getStyles = colors =>
  StyleSheet.create({
    container: {
      paddingLeft: 20,
      paddingRight: 15,
      flex: 1,
      marginTop: 35,
    },
    btn: {
      width: '100%',
      backgroundColor: colors.primary,
      paddingVertical: 10,
      alignItems: 'center',
      borderRadius: 10,
    },
  });
