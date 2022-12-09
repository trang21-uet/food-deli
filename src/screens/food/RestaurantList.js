import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { CategoriesBar, ItemRestaurant, SearchBar } from '../../components';

const data = [
  {
    id: 1,
    title: 'Phổ biến',
  },
  {
    id: 2,
    title: 'Pizza',
  },
  {
    id: 3,
    title: 'Gà rán',
  },
  {
    id: 4,
    title: 'Trà sữa',
  },
  {
    id: 5,
    title: 'Bánh mì',
  },
  {
    id: 6,
    title: 'Trà sữa',
  },
  {
    id: 7,
    title: 'Bánh mì',
  },
  {
    id: 8,
    title: 'Trà sữa',
  },
  {
    id: 9,
    title: 'Bánh mì',
  },
];

export default function RestaurantList() {
  const [indexCategory, setIndexCatgory] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <SearchBar title='Nhập tên nhà hàng' />
      <View>
        <CategoriesBar
          listItem={data}
          categoryActive={indexCategory}
          changeCategory={setIndexCatgory}
        />
      </View>
      <ScrollView>
        <ItemRestaurant />
        <ItemRestaurant />
        <ItemRestaurant />
        <ItemRestaurant />
        <ItemRestaurant />
        <ItemRestaurant />
        <ItemRestaurant />
      </ScrollView>
    </View>
  );
}
