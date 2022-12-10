import { View, TouchableNativeFeedback } from 'react-native';
import React from 'react';

export default function Card({
  borderRadius,
  marginHorizontal,
  marginVertical,
  disabled,
  onPress,
  noShadow,
  ripple,
  style,
  children,
}) {
  return (
    <View
      style={[
        {
          borderRadius,
          marginHorizontal,
          marginVertical,
        },
        !noShadow && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
      ]}
    >
      <TouchableNativeFeedback
        disabled={disabled}
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(ripple || '#ccc', true)}
      >
        <View {...style}>{children}</View>
      </TouchableNativeFeedback>
    </View>
  );
}
