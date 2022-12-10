import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Loading, MyButton, MyIcon } from '../../../components';
import { host } from '../../../constants/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddressManager() {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAddress = async () => {
    try {
      const info = await AsyncStorage.getItem('user');
      const id = JSON.parse(info).userId;
      const response = await fetch(host + '/api/user/' + id + '/address');
      const json = await response.json();
      console.log(json);
      setAddress(json);
      setLoading(false);
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <ScrollView style={styles.container}>
        {address.map((item, index) => (
          <Item key={index} {...item} setAddress={setAddress} />
        ))}
      </ScrollView>
      <MyButton
        style={styles.btn}
        title='Thêm địa chỉ mới'
        textStyle={{
          fontFamily: 'Linotte-SemiBold',
          fontSize: 16,
          color: 'white',
          textTransform: 'uppercase',
        }}
        onPress={() => {
          nav.navigate('CreateAddress', { onGoBack: getAddress });
        }}
      />
    </>
  );
}

const Item = ({
  province,
  district,
  awards,
  detail,
  active,
  id,
  setAddress,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();

  const getAddress = async () => {
    try {
      const info = await AsyncStorage.getItem('user');
      const id = JSON.parse(info).userId;
      const response = await fetch(host + '/api/user/' + id + '/address');
      const json = await response.json();
      // console.info(json);
      setAddress(json);
    } catch (error) {}
  };

  return (
    <View style={styles.containerItem}>
      {active && (
        <View style={styles.addressDefault}>
          <Text style={{ ...styles.title, color: 'gray', fontSize: 12 }}>
            MẶC ĐỊNH
          </Text>
        </View>
      )}
      <View>
        <Text style={{ fontSize: 15 }}>Chi tiết: {detail}</Text>

        <Text style={{ fontSize: 15 }}>
          {[awards, district, province].join(', ')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('EditAddress', {
            province,
            district,
            detail,
            awards,
            active,
            id,
            onGoBack: getAddress,
          });
        }}
        activeOpacity={0.8}
        style={{ position: 'absolute', bottom: 5, right: 15 }}
      >
        <Feather
          name='edit-3'
          size={22}
          color={'#fc795d'}
          style={{ textDecorationLine: 'underline' }}
        />
      </TouchableOpacity>
    </View>
  );
};
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
    },
    containerItem: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#e1e1e1',
      backgroundColor: 'white',
      marginVertical: 2,
    },
    addressDefault: {
      position: 'absolute',
      top: 12,
      right: 12,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: '#fc795d',
    },
    btn: {
      backgroundColor: colors.primary,
      paddingTop: 10,
      paddingBottom: 13,
      paddingHorizontal: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
      marginHorizontal: 10,
      marginBottom: 10,
    },
  });
