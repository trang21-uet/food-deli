import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import ItemDish from "../../components/ItemDish1";

const SearchCategory = () => {
  return (
    <ScrollView style={styles.container}>
      <ItemDish />
      <ItemDish />
      <ItemDish />
      <ItemDish />
      <ItemDish />
      <ItemDish />
    </ScrollView>
  );
};

export default SearchCategory;

const styles = StyleSheet.create({
  container: {},
});
