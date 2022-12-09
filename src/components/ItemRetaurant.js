import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Rate from './Rate';
import { useNavigation, useTheme } from '@react-navigation/native';
import MyIcon from './MyIcon';
import Card from './Card';

const ItemRestaurant = () => {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Card
      borderRadius={10}
      marginHorizontal={5}
      marginVertical={5}
      style={styles.container}
      onPress={() => nav.navigate('Restaurant', { name: 'KFC Hà Đông' })}
    >
      <Image
        style={styles.image}
        source={require('../assets/images/background2.jpg')}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <Text style={styles.name}>KFC Hà Đông</Text>
        <Text style={styles.address}>
          <MyIcon name='location-outline' size={18} />
          Số 44, Xuân Thủy, Cầu giấy, Hà Nội
        </Text>
        <View style={styles.footer}>
          <Rate size={16} numberRate={4} />
          <Text style={{ color: 'gray' }}>(100 đánh giá)</Text>
        </View>
      </View>
    </Card>
  );
};
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.card,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      height: 120,
      width: 120,
    },
    info: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 18,
      fontFamily: 'Linotte-SemiBold',
    },
    address: {
      color: colors.gray,

      marginBottom: 15,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
export default ItemRestaurant;
