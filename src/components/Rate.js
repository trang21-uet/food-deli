import { StyleSheet, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
const Rate = ({ size, numberRate }) => {
  const full = Math.floor(numberRate);
  const half = numberRate - full >= 0.5 ? 1 : 0;
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      {numberRate !== 0 ? (
        <>
          {[...Array(full).keys()].map((_, index) => (
            <FontAwesome
              size={size}
              style={styles.star}
              name='star'
              color='#ffa41c'
              key={index}
            />
          ))}
          {[...Array(half).keys()].map((_, index) => (
            <FontAwesome
              size={size}
              style={styles.star}
              name='star-half-empty'
              color='#ffa41c'
              key={index}
            />
          ))}
          {[...Array(5 - full - half).keys()].map((_, index) => (
            <FontAwesome
              size={size}
              style={styles.star}
              name='star'
              color='#d1d1d1'
              key={index}
            />
          ))}
        </>
      ) : (
        [0, 0, 0, 0, 0].map((_, index) => (
          <FontAwesome
            size={size}
            style={styles.star}
            name='star'
            color='#d1d1d1'
            key={index}
          />
        ))
      )}
    </View>
  );
};

export default Rate;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 2,
  },
});
