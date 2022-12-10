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

export default function EditAddress() {
  const { colors } = useTheme();
  const { province, district, detail, awards, active, id, onGoBack } =
    useRoute().params;
  const nav = useNavigation();

  const [data, setData] = useState({
    province,
    awards,
    district,
    detail,
    active: active || false,
    addressId: id,
  });

  const onSubmit = async () => {
    try {
      console.log(data);
      const response = await fetch(host + '/api/address', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const msg = await response.text();
      // console.log(msg);
      ToastAndroid.show('Thay đổi địa chỉ thành công', 2000);
      onGoBack();
      nav.goBack();
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <MyInput
        value={data.province}
        onChangeText={text => setData({ ...data, province: text })}
        style={styles.input}
        placeholder='Tên tỉnh'
      />
      <MyInput
        value={data.district}
        onChangeText={text => setData({ ...data, district: text })}
        style={styles.input}
        placeholder='Tên quận/huyện'
      />
      <MyInput
        value={data.awards}
        onChangeText={text => setData({ ...data, awards: text })}
        style={styles.input}
        placeholder='Tên xã/phường'
      />
      <MyInput
        value={data.detail}
        onChangeText={text => setData({ ...data, detail: text })}
        style={styles.input}
        placeholder='Tên đường, số nhà, tòa nhà...'
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Đặt là địa chỉ mặc định</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setData({ ...data, active: !data.active })}
        >
          <MaterialCommunityIcons
            name={!data.active ? 'checkbox-blank-outline' : 'checkbox-marked'}
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
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
        onPress={onSubmit}
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
