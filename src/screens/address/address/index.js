import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
const data = [
  {
    id: 1,
    description: 'Số 2, ngách 37, Thổ Quan, Đống Đa, Hà Nội',
    address: 'Phường Thổ Quan, Quận Đống Đa, Hà Nội',
    default: false,
  },
  {
    id: 2,
    description: 'Số 2, ngách 37, Thổ Quan, Đống Đa, Hà Nội',
    address: 'Phường Thổ Quan, Quận Đống Đa, Hà Nội',
    default: true,
  },
  {
    id: 3,
    description: 'Số 2, ngách 37, Thổ Quan, Đống Đa, Hà Nội',
    address: 'Phường Thổ Quan, Quận Đống Đa, Hà Nội',
    default: false,
  },
  {
    id: 4,
    description: 'Số 2, ngách 37, Thổ Quan, Đống Đa, Hà Nội',
    address: 'Phường Thổ Quan, Quận Đống Đa, Hà Nội',
    default: false,
  },
  {
    id: 5,
    description: 'Số 2, ngách 37, Thổ Quan, Đống Đa, Hà Nội',
    address: 'Phường Thổ Quan, Quận Đống Đa, Hà Nội',
    default: false,
  },
];

export default function AddressManager() {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <ScrollView style={styles.container}>
      {data.map((element, index) => (
        <Item key={index} item={element} />
      ))}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={() => nav.navigate('CreateAddress')}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}
        >
          THÊM ĐỊA CHỈ MỚI
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const Item = ({ item }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.containerItem}>
      <View>
        <View>
          <Text style={{ maxWidth: '90%' }}>
            <Text>Mô tả: </Text>
            {item.description}
          </Text>
          <Text>{item.address}</Text>
        </View>
        {item.default ? (
          <View style={styles.addressDefault}>
            <Text style={{ ...styles.title, color: 'gray', fontSize: 12 }}>
              MẶC ĐỊNH
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
      <TouchableOpacity
        onPress={() => Alert.alert('hello')}
        activeOpacity={0.8}
      >
        <MaterialIcons name='edit-location' size={25} color={'#fc795d'} />
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
      alignSelf: 'flex-start',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: '#fc795d',
    },
    btn: {
      backgroundColor: colors.primary,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 8,
      marginHorizontal: 10,
    },
  });
