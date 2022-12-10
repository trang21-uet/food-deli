import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { useNav } from '../../providers';
import { emailRegex, errorMsg, getStyles } from './Constant';

export default function Register() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');
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

    if (repass === '') {
      error[2] = errorMsg.emptyRepass;
    } else if (password !== repass) {
      error[2] = errorMsg.passNotMatch;
    }

    setErrors(error);

    return error.length === 0;
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (validate()) {
      try {
        const response = await fetch(host + '/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        if (response.ok) {
          const data = await response.text();
          await AsyncStorage.setItem('user', data);
          ToastAndroid.show('Đăng ký tài khoản thành công', 2000);
          nav.navigate('Home');
          setScreen('Home');
        }
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
      <Text style={styles.title}>Đăng ký tài khoản</Text>
      <MyInput
        style={[styles.input, { borderWidth: errors[0] ? 1 : 0 }]}
        placeholder='Email'
        value={username}
        onChangeText={text => setUsername(text)}
      />
      {errors[0] && <Text style={styles.errorText}>{errors[0]}</Text>}
      <MyInput
        style={[styles.input, { borderWidth: errors[1] ? 1 : 0 }]}
        placeholder='Mật khẩu'
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {errors[1] && <Text style={styles.errorText}>{errors[1]}</Text>}
      <MyInput
        style={[styles.input, { borderWidth: errors[2] ? 1 : 0 }]}
        placeholder='Nhập lại mật khẩu'
        value={repass}
        onChangeText={text => setRepass(text)}
        secureTextEntry
      />
      {errors[2] && <Text style={styles.errorText}>{errors[2]}</Text>}
      <MyButton
        title='Đăng ký'
        onPress={onSubmit}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16 }}>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => nav.navigate('Login')}>
          <Text
            style={{
              fontFamily: 'Linotte-Bold',
              fontSize: 16,
              textDecorationLine: 'underline',
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
