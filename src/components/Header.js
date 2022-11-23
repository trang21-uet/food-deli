import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import MyIcon from './MyIcon';

export default function Header() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.card,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Foodster</Text>
      <TouchableOpacity>
        <MyIcon name='search' size={25} style={{ padding: 10 }} />
      </TouchableOpacity>
    </View>
  );
}
