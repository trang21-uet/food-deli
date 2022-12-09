import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderCollapse from './OrderCollapse';

export default function OrderConfirm() {
  return (
    <View style={styles.container}>
      <Text>
        <FontAwesome name='user' size={19} color={'#FF4E3C'} /> Người nhận:{' '}
      </Text>
      <View style={styles.user}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/profile.jpg')}
          resizeMode={'cover'}
        />
        <View style={{ marginLeft: 8 }}>
          <Text>David Backham</Text>
          <Text style={styles.text}>+084.9876.54321</Text>
        </View>
      </View>
      <View style={styles.address}>
        <View style={{ flex: 1 }}>
          <Text>
            <Ionicons name='location-sharp' size={20} color={'#FF4E3C'} />
            Địa chỉ nhận hàng:
          </Text>
          <Text style={styles.text}>
            {' '}
            Số 12 Nguyễn Bỉnh Khiêm, Hai Bà Trưng, Hà Nội
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: 'gray' }}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.address}>
        <View style={{ flex: 1 }}>
          <Text>
            <Ionicons name='time-sharp' size={18} color={'#FF4E3C'} /> Thời gian
            nhận hàng mong muốn:
          </Text>
          <Text style={styles.text}>4:00 PM, ngày 12 tháng 11 năm 2022</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: 'gray' }}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginVertical: 10,
        }}
      >
        <FontAwesome5 name='scroll' size={16} color={'#FF4E3C'} /> Danh sách đơn
        hàng:
      </Text>
      <View>
        <OrderCollapse />
        <OrderCollapse />
      </View>
      <View style={styles.checkout}>
        <View style={styles.row}>
          <Text>Tổng tiền hàng</Text>
          <Text>120.000 Đ</Text>
        </View>
        <View style={styles.row}>
          <Text>Phí Vận chuyển</Text>
          <Text>+ 40.000 Đ</Text>
        </View>
        <View style={styles.row}>
          <Text>Tổng thanh toán</Text>
          <Text style={{ color: '#FF4E3C', fontSize: 18 }}>160.000 Đ</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('OrderConfirm')}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}
        >
          ĐẶT HÀNG
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
    paddingVertical: 5,
  },
  text: {
    color: 'gray',
  },
  address: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
    paddingVertical: 10,
  },
  checkout: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#FF4E3C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 5,
  },
});
