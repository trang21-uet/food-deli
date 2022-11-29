import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import ItemCounpon from "../../components/ItemCounpon";
import CategoriesBar from "../../components/CategoriesBar";
const categories = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Cơm tấm",
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
export default function CouponList() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [indexCategory, setIndexCatgory] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Tìm kiếm mã giảm giá" />
        <Ionicons name="search" size={25} color={"gray"} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <CategoriesBar
          listItem={categories}
          categoryActive={indexCategory}
          changeCategory={setIndexCatgory}
        />
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

const getStyles = (colors) =>
  StyleSheet.create({
    container: {},
    searchContainer: {
      marginHorizontal: 10,
      flexDirection: "row",
      marginTop: 10,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: "white",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      paddingVertical: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      fontFamily: "Poppins-Regular",
    },
  });
