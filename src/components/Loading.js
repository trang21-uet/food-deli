import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function Loading() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
}
