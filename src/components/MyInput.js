import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function MyInput(props) {
  return (
    <TextInput {...props} style={[styles.default, props.style]}></TextInput>
  );
}

const styles = StyleSheet.create({
  default: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
  },
});
