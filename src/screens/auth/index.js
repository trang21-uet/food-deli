import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MyButton, MyIcon, MyInput } from '../../components';
import { useTheme } from '@react-navigation/native';

const Login = () => {
  const theme = useTheme();
  const styles = getStyles(theme.colors);

  return (
    <View style={styles.container}>
      <MyIcon name='close' size={40} style={styles.closeBtn} />
      <Text style={styles.title}>Đăng nhập</Text>
      <MyInput style={styles.input} placeholder='Email' />
      <MyInput style={styles.input} placeholder='Mật khẩu' />
      <Text style={{ width: '100%', textAlign: 'right', fontWeight: 'bold' }}>
        Quên mật khẩu?
      </Text>
      <MyButton
        title='Đăng nhập'
        onPress={() => alert('Hao?')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text>Chưa có tài khoản? </Text>
        <Text style={{ fontWeight: 'bold' }}>Tạo tài khoản</Text>
      </View>
    </View>
  );
};

const Register = () => {
  const theme = useTheme();
  const styles = getStyles(theme.colors);

  return (
    <View style={styles.container}>
      <MyIcon name='close' size={40} style={styles.closeBtn} />
      <Text style={styles.title}>Đăng ký tài khoản</Text>
      <MyInput style={styles.input} placeholder='Email' />
      <MyInput style={styles.input} placeholder='Mật khẩu' />
      <MyInput style={styles.input} placeholder='Nhập lại mật khẩu' />
      <MyButton
        title='Đăng ký'
        onPress={() => alert('Hao?')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text>Bạn đã có tài khoản? </Text>
        <Text style={{ fontWeight: 'bold' }}>Đăng nhập</Text>
      </View>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: 30,
    },
    input: {
      marginVertical: 10,
    },
    button: {
      width: '100%',
      borderRadius: 10,
      backgroundColor: colors.primary,
      paddingVertical: 15,
      marginVertical: 15,
    },
    buttonText: {
      color: colors.white,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeBtn: {
      position: 'absolute',
      top: 20,
      right: 0,
      padding: 15,
    },
  });

export { Login, Register };
