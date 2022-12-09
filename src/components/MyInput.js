import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function MyInput(props) {
  return (
    <TextInput {...props} style={[styles.default, props.style]}></TextInput>
  );
}

const styles = StyleSheet.create({
  default: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontFamily: 'Linotte',
  },
});
