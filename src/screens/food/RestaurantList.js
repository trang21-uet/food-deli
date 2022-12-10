import { ScrollView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  CategoriesBar,
  ItemRestaurant,
  Loading,
  SearchBar,
} from '../../components';
import { host } from '../../constants/Data';

const cate = [
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
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const request = async () => {
    try {
      const response = await fetch(host + '/api/restaurant');
      const json = await response.json();

      setData(json);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <View style={{ flex: 1 }}>
      <SearchBar title='Nhập tên nhà hàng' />
      <View>
        <CategoriesBar
          listItem={cate}
          categoryActive={indexCategory}
          changeCategory={setIndexCatgory}
        />
      </View>
      <ScrollView>
        {data.map((item, index) => (
          <ItemRestaurant key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}
