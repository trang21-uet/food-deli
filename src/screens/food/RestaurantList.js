import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Header, Restaurant } from "../../components";
import CategoriesBar from "../../components/CategoriesBar";
import SearchBar from "../../components/SearchBar";

const data = [
  {
    id: 1,
    title: "Phổ biến",
  },
  {
    id: 2,
    title: "Pizza",
  },
  {
    id: 3,
    title: "Gà rán",
  },
  {
    id: 4,
    title: "Trà sữa",
  },
  {
    id: 5,
    title: "Bánh mì",
  },
  {
    id: 6,
    title: "Trà sữa",
  },
  {
    id: 7,
    title: "Bánh mì",
  },
  {
    id: 8,
    title: "Trà sữa",
  },
  {
    id: 9,
    title: "Bánh mì",
  },
];

export default function RestaurantList() {
  const [indexCategory, setIndexCatgory] = useState(0);
  return (
    <View>
      <SearchBar title="Nhập tên nhà hàng" />
      <CategoriesBar
        listItem={data}
        categoryActive={indexCategory}
        changeCategory={setIndexCatgory}
      />
      <View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 20 }}>
            {/* {items.map((item, index) => (
              <Restaurant key={index} {...item} />
            ))} */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
