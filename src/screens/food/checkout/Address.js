import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MyButton, MyInput } from '../../../components';
import { useTheme } from '@react-navigation/native';

export default function Address() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
        Địa chỉ người nhận
      </Text>
      <Text style={styles.label}>Tỉnh/Thành phố</Text>
      <MyInput placeholder='Tỉnh/Thành phố' style={styles.input} />
      <Text style={styles.label}>Quận/Huyện</Text>
      <MyInput placeholder='Quận/Huyện' style={styles.input} />
      <Text style={styles.label}>Xã/Phường</Text>
      <MyInput placeholder='Xã/Phường' style={styles.input} />
      <Text style={styles.label}>Địa chỉ chi tiết</Text>
      <MyInput placeholder='Địa chỉ chi tiết' style={styles.input} />

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
