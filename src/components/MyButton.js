import { Text, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';

export default function MyButton({ onPress, style, title, textStyle }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={style}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
