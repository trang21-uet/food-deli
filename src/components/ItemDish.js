import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MyIcon from './MyIcon';
import { useTheme } from '@react-navigation/native';
import Pill from './Pill';

const width = Dimensions.get('window').width;

const HorizontalDish = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Pill marginHorizontal={10} borderRadius={20} style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>Phở Hà Nội</Text>
        <Text style={styles.restaurant}>Vinmart</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>40.000 Đ</Text>
          <View style={styles.box}>
            <MyIcon name='star-outline' color={colors.primary} size={15} />
            <Text style={{ color: 'gray' }}> 4.5</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/images/phohanoi.jpg')}
        resizeMode={'contain'}
      />
    </Pill>
  );
};
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width - 50,
      backgroundColor: colors.card,
      borderRadius: 20,
      overflow: 'hidden',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 16,
      fontWeight: '500',
      marginRight: 5,
      color: colors.primary,
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
    },
    restaurant: {
      color: colors.gray,
      marginVertical: 4,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      flex: 1,
      paddingStart: 15,
    },
    image: {
      height: 100,
      width: 100,
    },
  });
export default HorizontalDish;
