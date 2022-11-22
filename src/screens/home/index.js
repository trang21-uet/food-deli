import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
export default function Home() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <Banner />
      <SearchBar />
      <Categories />
      <View style={styles.card}></View>
    </View>
  );
}

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    search: {
      width: "auto",
      top: 170,
      left: 30,
      right: 30,
    },
    searchBox: {
      backgroundColor: colors.white,
      fontSize: 15,
    },
    searchBtn: {
      position: "absolute",
      top: 14,
      right: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    foodBtn: {
      flexDirection: "column",
      alignItems: "center",
      margin: 10,
    },
    foodBtnImage: {
      width: 60,
      height: 60,
      borderRadius: 5,
      backgroundColor: "#ccc",
    },
    card: {
      flex: 1,
      height: 100,
      backgroundColor: colors.card,
      marginHorizontal: 30,
    },
  });
