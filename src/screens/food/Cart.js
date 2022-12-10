import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Error, ItemOrder, MyButton } from '../../components';
import { useNavigation } from '@react-navigation/native';
import numberWithCommas from '../../constants/function';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  {
    restaurant: {
      name: 'Nhất Quán',
      description: 'Quán ăn sinh viên',
      distance: 3,
      image:
        'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80',
    },
    items: [
      {
        name: 'Bún chả',
        price: 35000,
        description: 'Thêm bún',
        quantity: 1,
        image:
          'https://img.taste.com.au/1HfSbEeh/w720-h480-cfill-q80/taste/2016/11/bun-cha-93944-1.jpeg',
      },

      {
        name: 'Cơm rang dưa bò',
        price: 30000,
        description: '',
        quantity: 2,
        image:
          'https://cdn.beptruong.edu.vn/wp-content/uploads/2018/09/com-rang-dua-bo.jpg',
      },
    ],
  },
];

export default function Cart() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await AsyncStorage.getItem('user');
    setUser(JSON.parse(response));
  };

  const getCart = async () => {
    try {
      let response = await AsyncStorage.getItem('cart');
      response = JSON.parse(response);
      setData(response);
      // console.log(response);
      let total = 0;
      response.forEach(({ foods }) => {
        foods.forEach(({ food, amount }) => {
          total += food.price * amount;
        });
      });
      setTotal(total);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    const request = async () => {
      await getUser();
      await getCart();
    };
    request();
  }, []);

  const emptyCart = () => {
    return data.length === 0 || data.every(({ foods }) => foods.length == 0);
  };

  return !user ? (
    <Error code='login' />
  ) : loading || emptyCart() ? (
    <Error code='empty-cart' />
  ) : (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View>
        <Text
          style={{
            fontFamily: 'Linotte-Bold',
            fontSize: 20,
            textAlign: 'center',
            marginVertical: 10,
          }}
        >
          Giỏ hàng
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {data !== null &&
          data.map((item, index) => (
            <ItemOrder key={index} {...item} update={getCart} />
          ))}
      </ScrollView>
      {data !== null && (
        <>
          <View style={styles.rowCheckout}>
            <Text style={styles.title}>Tổng chi phí:</Text>
            <Text
              style={{
                ...styles.title,
                color: colors.primary,
              }}
            >
              {numberWithCommas(total)} Đ
            </Text>
          </View>
          <MyButton
            style={styles.btn}
            textStyle={{
              fontFamily: 'Linotte-Bold',
              color: colors.white,
              fontSize: 16,
              textTransform: 'uppercase',
              paddingBottom: 3,
            }}
            title={'Mua hàng (' + data.length + ')'}
            onPress={() =>
              nav.navigate('OrderConfirm', {
                data,
                price: total,
              })
            }
          />
        </>
      )}
    </View>
  );
}
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    rowCheckout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    title: {
      fontFamily: 'Linotte-SemiBold',
      fontSize: 16,
    },
    btn: {
      backgroundColor: colors.primary,
      paddingVertical: 10,
      alignItems: 'center',
      borderRadius: 10,
      marginVertical: 10,
    },
  });
