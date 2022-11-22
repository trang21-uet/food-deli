import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function RestaurantList() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View>
      <Text>Restaurant</Text>
    </View>
  );
}

const getStyles = colors => StyleSheet.create({});
