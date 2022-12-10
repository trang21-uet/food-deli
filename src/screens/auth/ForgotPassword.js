import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import {
  Keyboard,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackButton, MyButton, MyInput } from '../../components';
import { host } from '../../constants/Data';
import { emailRegex, errorMsg, getStyles } from './Constant';

export default function ForgotPassword() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  const validate = () => {
    if (username === '') {
      setError(errorMsg.emptyEmail);
      return false;
    } else if (!username.match(emailRegex)) {
      setError(errorMsg.invalidEmail);
      return false;
    }

    return true;
  };

  const request = async () => {
    try {
      const response = await fetch(host + '/auth/forgot_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
        }),
      });
      const data = await response.text();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (validate()) {
      try {
        await request();
        ToastAndroid.show('Kiểm tra email để lấy mã xác thực', 2000);
        nav.navigate('Otp', { username, request });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <BackButton />
      </View>
      <Text style={styles.title}>Lấy lại mật khẩu</Text>
      <Text style={{ marginVertical: 5, textAlign: 'center' }}>
        Nhập email tài khoản để đặt lại mật khẩu
      </Text>
      <MyInput
        style={[styles.input, { borderWidth: error ? 1 : 0 }]}
        placeholder='Email'
        value={username}
        onChangeText={text => setUsername(text)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <MyButton
        title='Nhận email'
        onPress={onSubmit}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16 }}>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => nav.navigate('Register')}>
          <Text style={{ fontFamily: 'Linotte-Bold', fontSize: 16 }}>
            Tạo tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
