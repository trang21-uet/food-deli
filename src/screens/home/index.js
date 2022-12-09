import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Banner from '../../components/Banner';
import ButtonAll from '../../components/ButtonAll';
import {
  Categories,
  SearchBar,
  HorizontalDish,
  VerticalDish,
} from '../../components';

export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Banner />
      <View style={{ marginTop: -45 }}>
        <SearchBar title={'Tìm kiếm món ăn'} />
      </View>
      <Categories />
      <View style={{ marginTop: 10 }}>
        <ButtonAll title={'ĐANG HOT'} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HorizontalDish />
          <HorizontalDish />
          <HorizontalDish />
          <HorizontalDish />
          <HorizontalDish />
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <ButtonAll title={'MỚI NHẤT'} />
        {/* <FlatList
          data={[1, 2, 2, 2]}
          numColumns={2}
          renderItem={({ item, index }) => {
            const lastItem = index === 5;
            return (
              <View
                style={{
                  flex: 1,
                  padding: 8,
                  maxWidth: lastItem ? '50%' : '100%',
                }}
              >
                <VerticalDish key={index} />
              </View>
            );
          }}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            marginTop: 5,
          }}
        >
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish />
          </View>
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            marginBottom: 5,
          }}
        >
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish />
          </View>
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
