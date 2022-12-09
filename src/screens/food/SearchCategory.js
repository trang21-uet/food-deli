import { ScrollView } from 'react-native';
import React from 'react';
import { HorizontalDish } from '../../components';

const SearchCategory = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HorizontalDish />
      <HorizontalDish />
      <HorizontalDish />
      <HorizontalDish />
      <HorizontalDish />
      <HorizontalDish />
    </ScrollView>
  );
};

export default SearchCategory;
