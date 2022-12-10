import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Rate from './Rate';
import { useNavigation, useTheme } from '@react-navigation/native';
import Card from './Card';
import numberWithCommas from '../constants/function';
import Materialicons from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get('window').width;

export default function VerticalDish({
  id,
  name,
  description,
  restaurant,
  noRate,
  price,
  oldPrice,
  images,
}) {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Card
      borderRadius={10}
      onPress={() =>
        nav.navigate('DishDetail', { id, restaurantId: restaurant.id })
      }
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{
          uri: images[0].url,
        }}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        {!noRate && (
          <View style={styles.box}>
            <Materialicons
              name='storefront'
              size={20}
              color={colors.gray}
              activeOpacity={0.8}
              style={{ marginRight: 5 }}
            />
            {restaurant.numberRate !== 0 && (
              <Rate
                size={15}
                numberRate={Math.floor(restaurant.rate * 10) / 10}
              />
            )}
            <Text style={{ color: colors.gray, fontSize: 13 }}>
              {restaurant.numberRate === 0
                ? 'Chưa có đánh giá'
                : '(' + Math.floor(restaurant.rate * 10) / 10 + ')'}
            </Text>
          </View>
        )}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.price}>{numberWithCommas(price)} Đ</Text>
          <Text style={styles.oldprice}>{numberWithCommas(oldPrice)} Đ</Text>
        </View>
      </View>
    </Card>
  );
}
const getStyles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden',
    },
    name: {
      fontSize: 15,
      fontFamily: 'Linotte-SemiBold',
      height: 40,
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontSize: 16,
      marginRight: 5,
      color: '#fc795d',
      fontFamily: 'Linotte-SemiBold',
    },
    oldprice: {
      color: colors.gray,
      fontSize: 12,
      textDecorationLine: 'line-through',
    },
    info: {
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    image: {
      height: width / 2 - 10,
      width: width / 2 - 10,
    },
  });
