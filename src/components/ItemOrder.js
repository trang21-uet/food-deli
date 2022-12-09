import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import MyIcon from './MyIcon';
import { useTheme } from '@react-navigation/native';
import Card from './Card';

const ItemOrder = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.shop}>
        <View style={{ flexDirection: 'row' }}>
          <Materialicons
            name='storefront'
            size={25}
            color={colors.gray}
            activeOpacity={0.8}
          />
          <Text style={styles.shopname}>KFC Hà Đông</Text>
        </View>
        <TouchableOpacity>
          <MyIcon name='chevron-forward' size={25} />
        </TouchableOpacity>
      </View>
      {[1, 2, 2].map((item, index) => (
        <ItemProduct key={index} />
      ))}
      <Card noShadow marginVertical={15} borderRadius={10} style={styles.pill}>
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
      </Card>
    </View>
  );
};

const ItemProduct = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.containerProduct}>
      <Image
        style={styles.image}
        source={require('../assets/images/garan.jpg')}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Gà chiên xù</Text>
          <Text style={styles.description}>Gà siêu giòn.</Text>
        </View>

        <Text style={styles.price}>40.000 Đ</Text>
      </View>
      <View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
            <Text style={styles.btncontent}>-</Text>
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 8 }}>
            <Text>12</Text>
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
            <Text style={styles.btncontent}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.total}>80.000 Đ</Text>
      </View>
    </View>
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
      marginTop: -3,
      fontSize: 18,
    },
    name: {
      fontFamily: 'Linotte-SemiBold',
      lineHeight: 16,
      fontSize: 16,
    },
    description: {
      color: colors.gray,
      lineHeight: 16,
      maxWidth: '90%',
    },
    price: {
      fontFamily: 'Linotte-SemiBold',
      color: '#fc795d',
    },
    image: {
      height: 70,
      borderRadius: 8,
      width: 70,
    },
    info: {
      flex: 1,
      paddingLeft: 10,
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
      borderBottomColor: colors.gray,
      borderRadius: 10,
    },
    total: {
      fontSize: 16,
      textAlign: 'center',
    },
    pill: {
      borderWidth: 2,
      borderColor: '#e1e1e1',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });
