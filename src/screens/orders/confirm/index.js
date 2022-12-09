import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OrderCollapse from './OrderCollapse';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MyButton, MyIcon } from '../../../components';

export default function OrderConfirm() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Item icon='person' title='Người nhận'>
        <View>
          <Text>David Backham</Text>
          <Text style={styles.text}>+084.9876.54321</Text>
        </View>
      </Item>

      <Item icon='location' title='Địa điểm nhận hàng' editable>
        <Text style={styles.text}>
          Số 12 Nguyễn Bỉnh Khiêm, Hai Bà Trưng, Hà Nội
        </Text>
      </Item>

      <Item icon='time' title='Thời gian nhận hàng' editable>
        <Text style={styles.text}>4:00 PM, 12/11/2022</Text>
      </Item>

      <Text
        style={{
          marginVertical: 10,
        }}
      >
        <FontAwesome5 name='scroll' size={16} color={colors.primary} /> Danh
        sách đơn hàng:
      </Text>
      <View>
        <OrderCollapse />
        <OrderCollapse />
      </View>
      <View style={styles.checkout}>
        <View style={styles.row}>
          <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
            Tổng tiền hàng
          </Text>
          <Text>120.000 Đ</Text>
        </View>
        <View style={styles.row}>
          <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
            Phí vận chuyển
          </Text>
          <Text>+ 40.000 Đ</Text>
        </View>
        <View style={styles.row}>
          <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
            Tổng thanh toán
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontSize: 18,
              fontFamily: 'Linotte-SemiBold',
            }}
          >
            160.000 Đ
          </Text>
        </View>
      </View>
      <MyButton
        style={styles.btn}
        onPress={() => nav.navigate('OrderStatus')}
        title='Đặt hàng'
        textStyle={{
          fontFamily: 'Linotte-SemiBold',
          color: colors.white,
          fontSize: 18,
          textTransform: 'uppercase',
          marginTop: -3,
        }}
      />
    </ScrollView>
  );
}

const Item = ({ icon, title, children, editable }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View
      style={{
        marginVertical: 10,
        borderBottomWidth: 2,
        borderColor: '#e1e1e1',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
          <MyIcon name={icon} size={20} color={colors.primary} /> {title}
        </Text>

        <TouchableOpacity style={{ display: editable ? 'flex' : 'none' }}>
          <Text style={{ color: colors.gray, textDecorationLine: 'underline' }}>
            Thay đổi
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.left}>{children}</View>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    left: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
      maxWidth: '80%',
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
      backgroundColor: colors.primary,
      paddingVertical: 10,
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 8,
      marginBottom: 5,
    },
  });
