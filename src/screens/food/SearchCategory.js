import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HorizontalDish, Loading } from '../../components';
import { useRoute } from '@react-navigation/native';
import { CATEGORIES, host } from '../../constants/Data';

const SearchCategory = () => {
  const { id } = useRoute().params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const request = async () => {
    try {
      const response = await fetch(host + '/api/food/category?id=' + id);
      const json = await response.json();

      setData(json);
      // console.log(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 10 }}>
      {data.map((item, index) => (
        <HorizontalDish {...item} key={index} />
      ))}
    </ScrollView>
  );
};

export default SearchCategory;
