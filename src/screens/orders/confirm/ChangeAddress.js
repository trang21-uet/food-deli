import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyButton, MyInput } from '../../../components';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { host } from '../../../constants/Data';

export default function ChangeAddress() {
  const { colors } = useTheme();
  const { address, setAddress } = useRoute().params;
  const nav = useNavigation();

  const [data, setData] = useState(address);

  return (
    <View style={styles.container}>
      <MyInput
        value={data}
        onChangeText={text => setData({ ...data, province: text })}
        style={styles.input}
        placeholder='Tên tỉnh'
      />
      <MyInput
        value={data}
        onChangeText={text => setData({ ...data, district: text })}
        style={styles.input}
        placeholder='Tên quận/huyện'
      />
      <MyInput
        value={data}
        onChangeText={text => setData({ ...data, awards: text })}
        style={styles.input}
        placeholder='Tên xã/phường'
      />
      <MyInput
        value={data}
        onChangeText={text => setData({ ...data, detail: text })}
        style={styles.input}
        placeholder='Tên đường, số nhà, tòa nhà...'
      />
      <MyButton
        style={{
          backgroundColor: colors.primary,
          paddingVertical: 10,
          alignItems: 'center',
          borderRadius: 10,
          marginVertical: 10,
        }}
        textStyle={{
          fontFamily: 'Linotte-Bold',
          color: colors.white,
          fontSize: 16,
          textTransform: 'uppercase',
          paddingBottom: 3,
        }}
        title={'GHI NHẬN'}
        onPress={() => {
          setAddress(
            [data.detail, data.awards, data.district, data.province].join(', ')
          );
          nav.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  input: {
    borderRadius: 5,
    marginVertical: 8,
  },
});
