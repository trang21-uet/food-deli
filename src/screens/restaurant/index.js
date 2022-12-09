import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { CategoriesBar, HorizontalDish, MyIcon } from '../../components';
import { useTheme } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const categories = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Cơm tấm',
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

export default function Restaurant() {
  const [indexCategory, setIndexCatgory] = useState(0);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <ScrollView>
      <Image
        style={styles.background}
        source={require('../../assets/images/background2.jpg')}
        resizeMode='cover'
      />
      <View style={styles.containerHeader}>
        <Text style={styles.name}>KFC Hà Đông</Text>
        <View style={styles.rating}>
          <MyIcon
            style={{ paddingRight: 5 }}
            name='star'
            size={18}
            color='#ffa41c'
          />
          <Text>4.9 (223 lượt đánh giá)</Text>
        </View>
        <Text numberOfLines={1} style={{ maxWidth: '90%' }}>
          <MyIcon
            style={{ paddingRight: 5 }}
            name='location-outline'
            size={18}
          />
          43 Nguyễn Thái Học, Đống Đa, Hà Nội
        </Text>
      </View>
      <View style={styles.searchbar}>
        <TextInput style={styles.input} placeholder='Tìm kiếm món ăn' />
        <MyIcon name='search' size={20} color={colors.gray} />
      </View>

      <CategoriesBar
        listItem={categories}
        categoryActive={indexCategory}
        changeCategory={setIndexCatgory}
      />
      <View style={{ marginTop: 10 }}>
        <HorizontalDish />
        <HorizontalDish />
        <HorizontalDish />
        <HorizontalDish />
        <HorizontalDish />
        <HorizontalDish />
      </View>
    </ScrollView>
  );
}

const getStyles = colors =>
  StyleSheet.create({
    background: {
      height: 200,
      width: width,
    },
    containerHeader: {
      backgroundColor: 'white',
      marginTop: -55,
      marginHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      paddingVertical: 10,
    },
    name: {
      fontSize: 20,
      fontFamily: 'Linotte-Bold',
    },
    rating: {
      flexDirection: 'row',
    },
    input: {
      flex: 1,
    },
    searchbar: {
      borderWidth: 2,
      paddingHorizontal: 10,
      borderColor: colors.gray,
      paddingVertical: 5,
      margin: 20,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
