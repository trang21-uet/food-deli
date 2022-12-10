import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
import Card from './Card';
import numberWithCommas from '../constants/function';
import Rate from './Rate';

export default function HorizontalDish({
  id,
  name,
  restaurant,
  description,
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
      marginVertical={5}
      style={{ ...styles.container, height: 120 }}
      onPress={() =>
        nav.navigate('DishDetail', { id, restaurantId: restaurant.id })
      }
    >
      <Image
        style={styles.image}
        source={{ uri: images[0].url }}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.box}>
            {restaurant.name && (
              <Materialicons
                name='storefront'
                size={20}
                color={colors.gray}
                activeOpacity={0.8}
                style={{ marginRight: 3 }}
              />
            )}
            {restaurant.name ? (
              <Text style={styles.restaurant} numberOfLines={1}>
                {restaurant.name}
              </Text>
            ) : (
              <Text
                numberOfLines={2}
                style={{ ...styles.restaurant, maxWidth: '80%' }}
              >
                {description}
              </Text>
            )}
          </View>
        </View>
        {restaurant.name && (
          <View style={styles.box}>
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
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.price}>{numberWithCommas(price) + ' Đ'}</Text>
            <Text style={styles.oldPrice}>
              {numberWithCommas(oldPrice) + ' Đ'}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
    },
    name: {
      fontSize: 17,
      fontFamily: 'Linotte-SemiBold',
    },
    price: {
      fontSize: 16,
      marginRight: 5,
      color: '#fc795d',
      fontFamily: 'Linotte-SemiBold',
    },
    oldPrice: {
      fontSize: 12,
      color: colors.gray,
      textDecorationLine: 'line-through',
    },
    box: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    restaurant: {
      color: colors.gray,
      // maxWidth: '90%',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'space-between',
    },
    image: {
      height: 120,
      width: 120,
    },
  });
