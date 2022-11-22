import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function Cart() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}

const getStyles = colors => StyleSheet.create({});
