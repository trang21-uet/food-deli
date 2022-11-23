import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import ItemCounpon from '../../components/ItemCounpon';
import { Pill, SearchBar } from '../../components';

const data = ['Tất cả', 'Cơm', 'Bún/Phở', 'Đồ uống', 'Bánh mì', 'Ăn vặt'];

export default function CouponList() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [selected, setSelected] = useState('Tất cả');
  return (
    <View style={styles.container}>
      <SearchBar placeholder='Tìm kiếm mã giảm giá' />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map(item => (
            <Pill
              key={item}
              borderRadius={15}
              marginHorizontal={10}
              marginVertical={5}
              onPress={() => setSelected(item)}
              ripple={colors.primary}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor:
                  item == selected ? colors.primary : colors.white,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: item == selected ? colors.white : colors.text,
                }}
              >
                {item}
              </Text>
            </Pill>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <ItemCounpon />
        <ItemCounpon />
        <ItemCounpon />
        <ItemCounpon />
        <ItemCounpon />
        <ItemCounpon />
        <ItemCounpon />
        <ItemCounpon />
      </ScrollView>
    </View>
  );
}
const ItemCategory = props => {
  const styles = getStyles();
  return (
    <View style={styles.containerCategory}>
      <Text style={styles.categoryTitle}>{props.title}</Text>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
  });
