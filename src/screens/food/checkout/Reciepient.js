import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MyButton, MyInput } from '../../../components';
import { useTheme } from '@react-navigation/native';

export default function Recipient() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
        Thông tin người nhận
      </Text>
      <Text style={styles.label}>Họ và tên người nhận</Text>
      <MyInput placeholder='Họ và tên' style={styles.input} />
      <Text style={styles.label}>Số điện thoại</Text>
      <MyInput placeholder='Số điện thoại' style={styles.input} />
      <Text style={styles.label}>Địa chỉ nhận hàng</Text>
      <MyInput placeholder='Địa chỉ' style={styles.input} />

      <MyButton
        style={{
          width: '100%',
          borderRadius: 10,
          backgroundColor: colors.primary,
          paddingVertical: 15,
          marginVertical: 20,
        }}
        textStyle={{
          color: colors.white,
          textTransform: 'uppercase',
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        }}
        title='Lưu'
      />
    </View>
  );
}

const getStyles = colors =>
  StyleSheet.create({
    label: {
      marginTop: 20,
      marginBottom: 10,
      fontSize: 16,
    },
    input: {
      backgroundColor: colors.white,
    },
  });
