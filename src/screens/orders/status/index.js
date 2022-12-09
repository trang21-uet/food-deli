import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import ItemStatus from './ItemStatus';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MyButton } from '../../../components';

const status = [
  {
    id: 1,
    title: 'Chờ xác nhận',
    description: 'Đơn hàng đang chờ cửa hàng xác nhận',
    active: true,
  },
  {
    id: 2,
    title: 'Đang chuẩn bị hàng',
    description: 'Đơn hàng được xác nhận và cửa hàng đang chuẩn bị háng',
    active: true,
  },
  {
    id: 3,
    title: 'Gửi cho bên vận chuyển',
    description: 'Đơn hàng chuẩn bị xong và gửi cho bên bên vận chuyển ',
    active: true,
  },
  {
    id: 4,
    title: 'Đang vận chuyển',
    description: 'Đơn hàng đang được vận chuyển tới địa chỉ của bạn',
    active: true,
  },
  {
    id: 5,
    title: 'Giao thành công',
    description: 'Đơn hàng được giao tới người dùng thành công',
    active: false,
  },
  {
    id: 6,
    title: 'Đánh giá',
    description: 'Đánh giá mức độ hài lòng của bạn đối với đơn hàng',
    active: false,
  },
];

export default function OrderStatus() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      {status.map(item => (
        <ItemStatus
          key={item.id}
          title={item.title}
          description={item.description}
          active={item.active}
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
        onPress={() => nav.navigate('MainScreen')}
      ></MyButton>
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
