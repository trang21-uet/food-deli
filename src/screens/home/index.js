import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import ItemDish from "../../components/ItemDish";
import ItemDish2 from "../../components/ItemDish2";
import ButtonAll from "../../components/ButtonAll";
export default function Home() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <ScrollView style={styles.container}>
      <Banner />
      <SearchBar />
      <Categories />
      <View style={{ marginTop: 10 }}>
        <ButtonAll title={"ĐANG HOT"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ItemDish />
          <ItemDish />
          <ItemDish />
          <ItemDish />
          <ItemDish />
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <ButtonAll title={"MỚI NHẤT"} />
        <FlatList
          data={[1, 2, 2, 2]}
          numColumns={2}
          renderItem={({ item, index }) => {
            const lastItem = index === 5;
            return (
              <View
                style={{
                  flex: 1,
                  padding: 8,
                  maxWidth: lastItem ? "50%" : "100%",
                }}
              >
                <ItemDish2 />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
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
