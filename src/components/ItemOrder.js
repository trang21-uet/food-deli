import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import MyIcon from './MyIcon';
import { useNavigation, useTheme } from '@react-navigation/native';
import numberWithCommas from '../constants/function';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemOrder = ({ name, id, foods }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const [data, setData] = useState(foods);

  return (
    data.length > 0 && (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('Restaurant', { id })}>
          <View style={styles.shop}>
            <View style={{ flexDirection: 'row' }}>
              <Materialicons
                name='storefront'
                size={25}
                color={colors.gray}
                activeOpacity={0.8}
              />
              <Text style={styles.shopname}>{name}</Text>
            </View>
            <MyIcon name='chevron-forward' size={25} />
          </View>
        </TouchableOpacity>
        {data.map((item, index) => (
          <ItemProduct key={index} {...item} {...{ data, setData }} />
        ))}
        <TouchableOpacity style={styles.pill}>
          <Text
            style={{
              fontFamily: 'Linotte-SemiBold',
              fontSize: 16,
              marginTop: -4,
            }}
          >
            Chọn mã giảm giá
          </Text>
          <MyIcon name='chevron-forward' size={25} />
        </TouchableOpacity>
      </View>
    )
  );
};

const ItemProduct = ({ amount, food, data, setData }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [quantity, setQuantity] = useState(amount);

  const add = async () => {
    try {
      let current = await AsyncStorage.getItem('cart');
      current = JSON.parse(current);
      current.forEach(({ foods }, i) => {
        foods.forEach((item, j) => {
          if (item.food.name === food.name) {
            current[i].foods[j].amount++;
          }
        });
      });

      await AsyncStorage.setItem('cart', JSON.stringify(current));
    } catch (error) {}
  };

  const reduce = async () => {
    try {
      let current = await AsyncStorage.getItem('cart');
      current = JSON.parse(current);
      current.forEach(({ foods }, i) => {
        foods.forEach((item, j) => {
          if (item.food.name === food.name) {
            let amount = current[i].foods[j].amount--;
            if (amount > 1) current[i].foods[j].amount--;
            else {
              current[i].foods.splice(j, 1);
              if (current[i].foods.length === 0) {
                setData([]);
              }
            }
          }
        });
      });

      await AsyncStorage.setItem('cart', JSON.stringify(current));
    } catch (error) {}
  };

  return (
    quantity > 0 && (
      <View style={styles.containerProduct}>
        <Image
          style={styles.image}
          source={{ uri: food.images[0].url }}
          resizeMode={'cover'}
        />
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: colors.primary,
            borderRadius: 100,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
          onPress={() => setData(data.filter(item => item.food.id === food.id))}
        >
          <MyIcon name='trash' outline size={15} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.name}>{food.name}</Text>
          <View style={{ flex: 1, width: '100%' }}>
            <Text numberOfLines={2} style={styles.description}>
              {food.description}
            </Text>
          </View>

          <Text style={styles.price}>{numberWithCommas(food.price)} Đ</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.6}
              onPress={async () => {
                setQuantity(quantity - 1);
                await reduce();
              }}
            >
              <Text style={styles.btncontent}>-</Text>
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 8 }}>
              <Text>{quantity}</Text>
            </View>

            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.6}
              onPress={async () => {
                setQuantity(quantity + 1);
                await add();
              }}
            >
              <Text style={styles.btncontent}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.total}>
            {numberWithCommas(food.price * quantity)} Đ
          </Text>
        </View>
      </View>
    )
  );
};

export default ItemOrder;

const getStyles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    shop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 2,
      paddingBottom: 5,
      borderColor: '#e1e1e1',
    },
    shopname: {
      fontFamily: 'Linotte-SemiBold',
      fontSize: 16,
      marginLeft: 5,
      marginTop: -2,
    },
    btn: {
      height: 25,
      width: 25,
      flexDirection: 'row',
      backgroundColor: '#e1e1e1',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btncontent: {
      marginTop: -5,
      fontSize: 18,
    },
    name: {
      fontFamily: 'Linotte-SemiBold',
      lineHeight: 16,
      fontSize: 16,
    },
    description: {
      color: colors.gray,
      lineHeight: 13,
      fontSize: 12,
      maxWidth: '100%',
    },
    price: {
      fontFamily: 'Linotte-SemiBold',
      color: '#fc795d',
      fontSize: 16,
    },
    image: {
      height: 80,
      borderRadius: 8,
      width: 80,
    },
    info: {
      flex: 1,
      paddingLeft: 10,
      justifyContent: 'flex-end',
      paddingTop: 3,
    },
    containerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerProduct: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: 15,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e1e1e1',
      borderRadius: 10,
    },
    total: {
      fontSize: 16,
      textAlign: 'center',
    },
    pill: {
      borderWidth: 2,
      marginVertical: 10,
      borderColor: '#e1e1e1',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });
