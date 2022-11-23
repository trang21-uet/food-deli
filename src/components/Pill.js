import { View, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function Pill({
  borderRadius,
  marginHorizontal,
  marginVertical,
  onPress,
  noShadow,
  ripple,
  style,
  children,
}) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        {
          borderRadius,
          marginHorizontal,
          marginVertical,
        },
        !noShadow && {
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ]}
    >
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(ripple || colors.gray, true)}
      >
        <View {...style}>{children}</View>
      </TouchableNativeFeedback>
    </View>
  );
}
