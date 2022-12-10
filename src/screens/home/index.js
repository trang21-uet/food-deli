import { View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import Banner from '../../components/Banner';
import ButtonAll from '../../components/ButtonAll';
import {
  Categories,
  SearchBar,
  HorizontalDish,
  VerticalDish,
  Loading,
} from '../../components';
import { host } from '../../constants/Data';

export default function Home() {
  const [hot, setHot] = useState([]);
  const [newData, setNewData] = useState([]);

  const [loading, setLoading] = useState(true);

  const hotRequest = async () => {
    try {
      const response = await fetch(host + '/api/food/category?id=9');
      const json = await response.json();

      setHot(json);
      // console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const newRequest = async () => {
    try {
      const response = await fetch(host + '/api/food/category?id=10');
      const json = await response.json();

      setNewData(json);
      // console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const request = async () => {
    await hotRequest();
    await newRequest();

    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView style={{ flex: 1 }}>
      <Banner />
      <View style={{ marginTop: -45 }}>
        <SearchBar title='Tìm kiếm món ăn' />
      </View>
      <Categories />
      <View style={{ marginTop: 10 }}>
        <ButtonAll title={'ĐANG HOT'} id={9} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {hot.map((item, index) => (
            <View key={index} style={{ width: 320, marginLeft: 10 }}>
              <HorizontalDish {...item} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <ButtonAll title={'MỚI NHẤT'} id={10} />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            marginTop: 5,
          }}
        >
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish {...newData[0]} />
          </View>
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish {...newData[1]} />
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
            <VerticalDish {...newData[2]} />
          </View>
          <View style={{ maxWidth: '50%', padding: 5 }}>
            <VerticalDish {...newData[3]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
