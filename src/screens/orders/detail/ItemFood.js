import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import numberWithCommas from '../../../constants/function';

const ItemFood = ({ amount, food }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: food.images[0].url }}
        resizeMode={'contain'}
      />
      <View style={styles.detail}>
        <View>
          <Text style={{ fontSize: 16, fontFamily: 'Linotte-SemiBold' }}>
            {food.name}
          </Text>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
            {food.description}
          </Text>
        </View>
        <View style={styles.price}>
          <Text
            style={{
              color: '#FF4E3C',
            }}
          >
            {numberWithCommas(food.price)} Đ
          </Text>
          <Text style={styles.title}>x {amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemFood;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  detail: {
    flex: 1,
    paddingLeft: 8,
    paddingVertical: 3,
    height: 90,
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  title: {
    color: 'gray',
    fontSize: 13,
  },
});
