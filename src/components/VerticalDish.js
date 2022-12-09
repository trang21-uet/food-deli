import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Rate from './Rate';
import { useNavigation, useTheme } from '@react-navigation/native';
import Card from './Card';

const width = Dimensions.get('window').width;

export default function VerticalDish() {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Card
      borderRadius={10}
      onPress={() => nav.navigate('DishDetail')}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require('../assets/images/garan.jpg')}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Gà chiên xù</Text>
        <View style={styles.box}>
          <Rate size={15} numberRate={4.5} />
          <Text style={{ color: colors.gray }}> 4.5</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.price}>40.000 Đ</Text>
          <Text style={styles.oldprice}>50.000 Đ</Text>
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
      fontSize: 18,
      fontFamily: 'Linotte-SemiBold',
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontSize: 14,
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
