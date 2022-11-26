import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Pill from './Pill';
import MyButton from './MyButton';

const ItemCounpon = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Pill
      marginVertical={10}
      marginHorizontal={10}
      borderRadius={10}
      style={styles.container}
    >
      <View style={styles.containerLeft}>
        <Text>Giảm 15 % tất cả sản phẩm</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <MyButton
            style={styles.button}
            textStyle={{ color: colors.white }}
            title='Áp dụng'
          />
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                color: colors.gray,
                textDecorationLine: 'underline',
              }}
            >
              Điều kiện
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerRight}>
        <Image
          style={styles.image}
          source={require('../assets/images/restaurantlogo.png')}
          resizeMode={'contain'}
        />
      </View>
    </Pill>
  );
};

export default ItemCounpon;

const getStyles = colors =>
  StyleSheet.create({
    image: {
      height: 80,
      width: 80,
    },
    containerLeft: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderStyle: 'dashed',
      borderRightWidth: 1,
      borderColor: colors.gray,
      paddingEnd: 10,
    },
    containerRight: {
      paddingStart: 10,
    },
    container: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    button: {
      padding: 10,
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: colors.primary,
      borderRadius: 5,
    },
  });
