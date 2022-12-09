import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF4E3C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 8,
  },
});
