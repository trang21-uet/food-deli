import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OrderCollapse from './OrderCollapse';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { MyButton, MyIcon } from '../../../components';
import { host } from '../../../constants/Data';
import numberWithCommas, { getDate } from '../../../constants/function';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNav } from '../../../providers';

export default function OrderConfirm() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const { data, price } = useRoute().params;
  const [list, setList] = useState(data);
  const [address, setAddress] = useState(null);
  const [ship, setShip] = useState(20000);
  const [user, setUser] = useState(null);
  const { setScreen } = useNav();

  const getUser = async () => {};

  const request = async () => {
    const food = data.map(item => {
      return {
        ...item,
        foods: item.foods.map(each => ({
          amount: each.amount,
          foodId: each.food.id,
        })),
        price:
          item.foods.reduce(
            (prev, each) => prev + each.food.price * each.amount,
            0
          ) + 20000,
      };
    });
    const body = {
      orders: food,
      address: address,
      time: getDate(),
      userId: user.userId,
    };
    console.log(body);
    try {
      const response = await fetch(host + '/api/orders', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.text();
      // console.log(json);
      ToastAndroid.show('Đặt hàng thành công', 2000);
    } catch (error) {
      console.log(error);
    }
    await AsyncStorage.removeItem('cart');
  };

  const getAddress = async () => {
    try {
      const get = await AsyncStorage.getItem('user');
      setUser(JSON.parse(get));
      const id = JSON.parse(get).userId;
      let response = await fetch(
        host + '/api/user/' + id + '/address?active=1'
      );
      const json = await response.json();
      if (json[0] === null) {
        response = await AsyncStorage.getItem('address');
        setAddress(JSON.parse(response));
      } else {
        setAddress(
          [
            json[0].detail,
            json[0].awards,
            json[0].district,
            json[0].province,
          ].join(', ')
        );
        console.log(json);
      }
      // console.info(json[0]);
      // setAddress(json.filter(item => item.active)[0]);
    } catch (error) {}
  };

  useEffect(() => {
    const fun = async () => {
      await getUser();
      await getAddress();
    };
    fun();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <Item icon='person' title='Người nhận'>
          <View>
            <Text>{user?.fullName}</Text>
            <Text style={styles.text}>+084.9876.54321</Text>
          </View>
        </Item>

        <Item
          icon='location'
          title='Địa điểm nhận hàng'
          onChange={() =>
            nav.navigate('ChangeAddress', {
              ...address,
              setAddress: setAddress,
            })
          }
        >
          <Text style={styles.text}>{address || 'Chưa có địa chỉ'}</Text>
        </Item>

        <Item icon='time' title='Thời gian nhận hàng' onChange={() => {}}>
          <Text style={styles.text}>{getDate()}</Text>
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
          {list.map((item, index) => (
            <OrderCollapse
              key={index}
              {...item}
              name={list[index].foods[0].food.restaurant.name}
              setData={setList}
              data={list}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.checkout}>
          <View style={styles.row}>
            <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
              Tổng tiền hàng
            </Text>
            <Text>{numberWithCommas(price)} Đ</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ fontFamily: 'Linotte-SemiBold', fontSize: 16 }}>
              Phí vận chuyển
            </Text>
            <Text>
              {data.length > 1 && data.length + ' x '}
              {numberWithCommas(ship)} Đ
            </Text>
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
              {numberWithCommas(price + ship * data.length)} Đ
            </Text>
          </View>
        </View>
        <MyButton
          style={styles.btn}
          onPress={async () => {
            await request();
            setScreen('Home');
            nav.navigate('Home');
          }}
          title='Đặt hàng'
          textStyle={{
            fontFamily: 'Linotte-SemiBold',
            color: colors.white,
            fontSize: 18,
            textTransform: 'uppercase',
            marginTop: -3,
          }}
        />
      </View>
    </>
  );
}

const Item = ({ icon, title, children, editable, onChange }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
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

        <TouchableOpacity
          style={{ display: onChange ? 'flex' : 'none' }}
          onPress={onChange}
        >
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
      marginBottom: 15,
    },
  });
