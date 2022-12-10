import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { BackButton, MyButton, MyInput } from '../../components';
import { host } from '../../constants/Data';
import { errorMsg, getStyles } from './Constant';

export default function Otp() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const { username, request } = useRoute().params;

  const onSubmit = async () => {
    Keyboard.dismiss();
    try {
      const response = await fetch(host + '/auth/check_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          otp,
        }),
      });
      console.log(otp);
      const data = await response.text();
      console.log(data);
      if (data === 'otp không chính xác!') {
        setError(errorMsg.wrongOtp);
      } else if (data === 'otp hết hạn!') {
        setError(errorMsg.expiredOtp);
      } else {
        nav.navigate('ResetPassword', { username, token: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <BackButton />
      </View>
      <Text style={styles.title}>Lấy lại mật khẩu</Text>
      <Text style={{ marginVertical: 5, textAlign: 'center', lineHeight: 20 }}>
        Nhập mã xác thực nhận được trong email Mã gồm 6 chữ số, hết hạn trong
        120s
      </Text>
      <MyInput
        style={[styles.input, { borderWidth: error ? 1 : 0 }]}
        placeholder='Mã xác thực (6 chữ số)'
        value={otp}
        keyboardType='number-pad'
        onChangeText={text => text.length <= 6 && setOtp(text)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <MyButton
        title='Xác thực'
        onPress={onSubmit}
        style={[
          styles.button,
          otp.length !== 6 && {
            backgroundColor: 'lightgray',
          },
        ]}
        textStyle={[
          styles.buttonText,
          otp.length !== 6 && {
            color: colors.black,
          },
        ]}
        disabled={otp.length < 6}
      />
      <TouchableOpacity
        onPress={async () => {
          await request();
        }}
      >
        <Text
          style={{
            fontFamily: 'Linotte-Bold',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}
        >
          Gửi lại mã
        </Text>
      </TouchableOpacity>
    </View>
  );
}
