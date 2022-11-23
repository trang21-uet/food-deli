import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import ItemCounpon from "../../components/ItemCounpon";
export default function CouponList() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Tìm kiếm mã giảm giá" />
        <Ionicons name="search" size={25} color={"gray"} />
      </View>
      <View style={styles.category}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ItemCategory title={"Tất cả"} />
          <ItemCategory title={"Cơm gà"} />
          <ItemCategory title={"Sushi"} />
          <ItemCategory title={"Phở"} />
          <ItemCategory title={"Bánh mì"} />
          <ItemCategory title={"Gà"} />
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
const ItemCategory = (props) => {
  const styles = getStyles();
  return (
    <View style={styles.containerCategory}>
      <Text style={styles.categoryTitle}>{props.title}</Text>
    </View>
  );
};

const getStyles = (colors) =>
  StyleSheet.create({
    container: {},
    searchContainer: {
      marginHorizontal: 10,
      flexDirection: "row",
      marginTop: 10,
      borderRadius: 15,
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
    },
    category: {
      marginTop: 10,
    },
    containerCategory: {
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    categoryTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "gray",
    },
  });
