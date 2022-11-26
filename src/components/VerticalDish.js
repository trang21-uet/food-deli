import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Pill from './Pill';
import { useTheme } from '@react-navigation/native';
import MyIcon from './MyIcon';

const VerticalDish = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Pill marginVertical={5} borderRadius={20} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/phohanoi.jpg')}
        resizeMode={'contain'}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Phở Hà Nội</Text>
        <Text style={styles.restaurant}>Vinmart</Text>
        <Text style={styles.price}>40.000 Đ</Text>
        <View style={styles.footer}>
          <View style={styles.box}>
            <MyIcon size={14} color={colors.primary} name='time-outline' />
            <Text style={{ color: colors.gray, fontSize: 12 }}>
              {' '}
              20-40 phút
            </Text>
          </View>
          <View style={styles.box}>
            <MyIcon name='star-outline' color={colors.primary} size={14} />
            <Text style={{ color: colors.gray, fontSize: 12 }}> 4.5</Text>
          </View>
        </View>
      </View>
    </Pill>
  );
};
const getStyles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      alignItems: 'center',
      borderRadius: 20,
      paddingVertical: 10,
    },
    name: {
      fontSize: 18,
      marginTop: 5,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 18,
      fontWeight: '500',
      color: colors.primary,
      marginBottom: 5,
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    restaurant: {
      color: 'gray',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    info: {
      width: '100%',
      paddingHorizontal: 10,
    },
    image: {
      height: 150,
      width: 150,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });
export default VerticalDish;
