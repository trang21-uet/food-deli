import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Rating = () => {
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.container}>
      {maxRating.map((item, key) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={key}
          onPress={() => setDefaultRating(item)}
        >
          {item <= defaultRating ? (
            <MaterialIcons size={50} color='#ffa41c' name='star' />
          ) : (
            <MaterialIcons size={50} color='gray' name='star-border' />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
