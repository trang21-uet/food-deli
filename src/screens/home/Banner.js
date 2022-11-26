import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Banner = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.text}>
          <Text>Tìm kiếm món ăn</Text>
          <Text>
            cùng <Text style={styles.red}>Food</Text>
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/delivery.png')}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
    </View>
  );
};

export default Banner;

const getStyles = colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 20,
      flexDirection: 'row',
      backgroundColor: colors.yellow,
      justifyContent: 'space-around',
    },
    text: {
      height: 50,
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    red: {
      color: colors.red,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
    image: {
      width: 100,
      height: 100,
    },
    imageContainer: {
      paddingRight: 25,
    },
  });
