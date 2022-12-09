import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard, Text, ToastAndroid, View } from 'react-native';
import { BackButton, MyButton, MyInput } from '../../components';
import { host } from '../../constants/Data';
import { errorMsg, getStyles } from './Constant';

export default function ResetPassword() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const { username, token } = useRoute().params;
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');

  const validate = () => {
    const error = [];

    if (password === '') {
      error[0] = errorMsg.emptyPass;
    }

    if (repass === '') {
      error[1] = errorMsg.emptyRepass;
    } else if (password !== repass) {
      error[1] = errorMsg.passNotMatch;
    }

    setErrors(error);

    return error.length === 0;
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (validate()) {
      try {
        const response = await fetch(host + '/auth/reset_password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            reset_password_token: token,
          },
          body: JSON.stringify({
            username: username,
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
      <Text style={styles.title}>Đặt lại mật khẩu</Text>
      <MyInput
        style={[styles.input, { borderWidth: errors[0] ? 1 : 0 }]}
        placeholder='Mật khẩu mới'
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Text style={styles.errorText}>{errors[0]}</Text>
      <MyInput
        style={[styles.input, { borderWidth: errors[1] ? 1 : 0 }]}
        placeholder='Nhập lại mật khẩu'
        value={repass}
        onChangeText={text => setRepass(text)}
        secureTextEntry
      />
      <Text style={styles.errorText}>{errors[1]}</Text>
      <MyButton
        title='Xác nhận'
        onPress={onSubmit}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}
