import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../constants/Data";

const Item = (props) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.itemContainerImage}>
      <Image
        source={props.style.url}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.title}>{props.style.title}</Text>
  </TouchableOpacity>
);

const Categories = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <View style={styles.containerListItem}>
        {CATEGORIES.slice(0, 4).map((item) => (
          <Item key={item.id} style={item} />
        ))}
      </View>
      <View style={styles.containerListItem}>
        {CATEGORIES.slice(4).map((item) => (
          <Item key={item.id} style={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerListItem: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    color: "gray",
  },
  image: {
    height: 40,
    width: 40,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
  itemContainerImage: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Categories;