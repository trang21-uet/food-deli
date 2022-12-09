import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import MyButton from './MyButton';

const ItemCounpon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={{ flex: 1 }}>
          <Text style={{ maxWidth: '90%', lineHeight: 16 }}>
            Giảm 15 % giá sản phẩm, chỉ áp đối với 1 số shop nhất định.
          </Text>
        </View>
        <MyButton
          style={styles.button}
          title='Lưu mã giảm giá'
          textStyle={{
            color: 'white',
            fontFamily: 'Linotte-SemiBold',
          }}
        />
      </View>
      <View style={styles.containerRight}>
        <Image
          style={styles.image}
          source={require('../assets/images/restaurantlogo.png')}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default ItemCounpon;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
  containerLeft: {
    flex: 2,
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderColor: 'gray',
  },
  containerRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 8,
    marginTop: 10,
    backgroundColor: '#fd795c',
    borderRadius: 5,
  },
});
