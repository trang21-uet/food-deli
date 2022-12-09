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
import { useNav } from '../../providers';
import { emailRegex, errorMsg, getStyles } from './Constant';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Login() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setScreen } = useNav();

  const validate = () => {
    let error = [];
    if (username === '') {
      error[0] = errorMsg.emptyEmail;
    } else if (!username.match(emailRegex)) {
      error[0] = errorMsg.invalidEmail;
    }
    if (password === '') {
      error[1] = errorMsg.emptyPass;
    }

    setErrors(error);

    return error.length === 0;
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (validate()) {
      try {
        const response = await fetch(host + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const data = await response.text();
        ToastAndroid.show('Đăng nhập thành công', 2000);
        setScreen('Home');
        nav.navigate('Home');
        console.info(data);
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
      <Text style={styles.title}>Đăng nhập</Text>
      <MyInput
        value={username}
        onChangeText={text => setUsername(text)}
        style={[styles.input, { borderWidth: errors[0] ? 1 : 0 }]}
        placeholder='Tên người dùng'
      />
      <Text style={styles.errorText}>{errors[0]}</Text>
      <MyInput
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={[styles.input, { borderWidth: errors[1] ? 1 : 0 }]}
        placeholder='Mật khẩu'
      />
      <Text style={styles.errorText}>{errors[1]}</Text>
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => nav.navigate('ForgotPassword')}
      >
        <Text
          style={{
            textAlign: 'right',
            fontFamily: 'Linotte-Bold',
            fontSize: 16,
          }}
        >
          Quên mật khẩu?
        </Text>
      </TouchableOpacity>
      <MyButton
        title='Đăng nhập'
        onPress={onSubmit}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16 }}>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => nav.navigate('Register')}>
          <Text
            style={{
              fontFamily: 'Linotte-Bold',
              fontSize: 16,
              textDecorationLine: 'underline',
            }}
          >
            Tạo tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
