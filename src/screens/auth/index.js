import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { MyButton, MyIcon, MyInput } from '../../components';
import { useNavigation, useTheme } from '@react-navigation/native';

const Login = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [errors, setErrors] = useState([]);

  return (
    <View style={styles.container}>
      <MyIcon name='close' size={40} style={styles.closeBtn} />
      <Text style={styles.title}>Đăng nhập</Text>
      <MyInput style={styles.input} placeholder='Email' />
      <Text style={styles.errorText}>{errors[0]}</Text>
      <MyInput style={styles.input} placeholder='Mật khẩu' />
      <Text style={styles.errorText}>{errors[1]}</Text>
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => nav.navigate('ForgotPassword')}
      >
        <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
          Quên mật khẩu?
        </Text>
      </TouchableOpacity>
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
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [errors, setErrors] = useState([]);

  return (
    <View style={styles.container}>
      <MyIcon name='close' size={40} style={styles.closeBtn} />
      <Text style={styles.title}>Đăng ký tài khoản</Text>
      <MyInput style={[styles.input, { borderWidth: 1 }]} placeholder='Email' />
      {errors[0] && <Text style={styles.errorText}>{errors[0]}</Text>}
      <MyInput
        style={[styles.input, { borderWidth: 0 }]}
        placeholder='Mật khẩu'
      />
      {errors[1] && <Text style={styles.errorText}>{errors[1]}</Text>}
      <MyInput
        style={[styles.input, { borderWidth: 0 }]}
        placeholder='Nhập lại mật khẩu'
      />
      {errors[2] && <Text style={styles.errorText}>{errors[2]}</Text>}
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

const ForgotPassword = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [errors, setErrors] = useState([]);

  return (
    <View style={styles.container}>
      <MyIcon name='close' size={40} style={styles.closeBtn} />
      <Text style={styles.title}>Lấy lại mật khẩu</Text>
      <Text style={{ marginVertical: 5 }}>
        Nhập email tài khoản để đặt lại mật khẩu
      </Text>
      <MyInput style={styles.input} placeholder='Email' />
      {errors[0] && <Text style={styles.errorText}>{errors[0]}</Text>}
      <MyButton
        title='Nhận email'
        onPress={() => alert('Hao?')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text>Đã có tài khoản? </Text>
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
      marginTop: 10,
      borderColor: '#f00',
      borderWidth: 1,
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
    errorText: {
      width: '100%',
      fontSize: 12,
      color: '#F00',
      textAlign: 'left',
    },
    closeBtn: {
      position: 'absolute',
      top: 25,
      right: 0,
      padding: 15,
    },
  });

export { Login, Register, ForgotPassword };
