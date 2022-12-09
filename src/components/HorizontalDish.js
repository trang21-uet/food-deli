import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useTheme } from '@react-navigation/native';
import Card from './Card';

export default function HorizontalDish() {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Card
      borderRadius={10}
      marginVertical={10}
      marginHorizontal={10}
      style={styles.container}
      onPress={() => nav.navigate('DishDetail')}
    >
      <Image
        style={styles.image}
        source={require('../assets/images/garan.jpg')}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>Gà chiên xù</Text>
          <Text style={styles.restaurant}>KFC Hà Đông</Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.price}>40.000 Đ</Text>
            <Text style={styles.oldprice}>50.000 Đ</Text>
          </View>
          <View style={styles.box}>
            <FontAwesome name='star' size={16} color='#ffa41c' />
            <Text style={{ color: colors.gray }}> 4.5</Text>
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
      fontSize: 18,
      fontFamily: 'Linotte-SemiBold',
    },
    price: {
      fontSize: 16,
      marginRight: 5,
      color: '#fc795d',
      fontFamily: 'Linotte-SemiBold',
    },
    oldprice: {
      fontSize: 12,
      color: colors.gray,

      textDecorationLine: 'line-through',
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
    },
    restaurant: {
      color: colors.gray,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
