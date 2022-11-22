import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MyIcon, MyInput } from '../../components';

export default function Home() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Foodster</Text>
          <Text style={{ fontSize: 16 }}>Hanoi</Text>
        </View>
      </View>

      <View style={styles.search}>
        <MyInput
          style={styles.searchBox}
          placeholder='Tìm kiếm món ăn, nhà hàng...'
        />
        <TouchableOpacity style={styles.searchBtn}>
          <MyIcon name='search' size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <FoodCategory name='Pizza' />
        <FoodCategory name='Sushi' />
        <FoodCategory name='Snacks' />
        <FoodCategory name='Lunch' />
      </View>
      <View style={styles.row}>
        <FoodCategory name='Pizza' />
        <FoodCategory name='Sushi' />
        <FoodCategory name='Snacks' />
        <FoodCategory name='Lunch' />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 30,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start' }}
        >
          Nhà hàng mới
        </Text>
      </View>
      <View style={styles.card}></View>
    </View>
  );
}

const FoodCategory = ({ name }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <TouchableNativeFeedback>
      <View style={styles.foodBtn}>
        <View style={styles.foodBtnImage}></View>
        <Text style={{ marginTop: 5 }}>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    header: {
      width: '100%',
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    banner: {
      width: '100%',
      height: 200,
      backgroundColor: '#ccc',
      marginBottom: 40,
    },
    search: {
      position: 'absolute',
      width: 'auto',
      top: 170,
      left: 30,
      right: 30,
    },
    searchBox: {
      backgroundColor: colors.white,
      fontSize: 15,
    },
    searchBtn: {
      position: 'absolute',
      top: 14,
      right: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    foodBtn: {
      flexDirection: 'column',
      alignItems: 'center',
      margin: 10,
    },
    foodBtnImage: {
      width: 60,
      height: 60,
      borderRadius: 5,
      backgroundColor: '#ccc',
    },
    card: {
      flex: 1,
      height: 100,
      backgroundColor: colors.card,
      marginHorizontal: 30,
    },
  });
