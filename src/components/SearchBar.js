import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Tìm kiếm món ăn..." />
        <Ionicons name="search" size={25} color={"gray"} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginTop: -25,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
