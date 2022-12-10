import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { WIDTH } from '../constants/Dimension';
import Card from './Card';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontFamily: 'Linotte-Bold',
            fontSize: 20,
          }}
        >
          <Text style={{ color: 'white' }}>FOOD</Text> DELIVERY
        </Text>
        <Text
          style={{
            fontFamily: 'Linotte-SemiBold',
            fontSize: 16,
          }}
        >
          Món gì cũng có
        </Text>
        <Card
          borderRadius={5}
          marginVertical={10}
          style={{
            backgroundColor: 'red',
            paddingVertical: 5,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: 'white',
              borderRadius: 5,
              marginBottom: 3,
            }}
          >
            Khám phá ngay
          </Text>
        </Card>
      </View>

      <Image
        source={require('../assets/images/delivery.png')}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    paddingVertical: 30,
    flexDirection: 'row',
    backgroundColor: '#fec363',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  btn: {
    backgroundColor: 'red',
    alignSelf: 'baseline',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 10,
  },
});
