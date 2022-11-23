import { Image, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import MyIcon from './MyIcon';
import Pill from './Pill';

export default function Restaurant({
  name,
  description,
  image,
  distance,
  rating,
}) {
  const { colors } = useTheme();
  return (
    <Pill
      borderRadius={20}
      marginVertical={10}
      style={{
        backgroundColor: colors.card,
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{name}</Text>
          <Text style={{ fontSize: 13, color: '#777' }}>{description}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 60 }}>
            <Text>{distance} km</Text>
          </View>
          <MyIcon
            name='star'
            color={colors.primary}
            size={20}
            style={{ marginStart: 20, marginEnd: 5 }}
          />
          <Text>{rating}</Text>
        </View>
      </View>
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
    </Pill>
  );
}
