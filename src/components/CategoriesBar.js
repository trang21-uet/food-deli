import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CategoriesBar = ({ listItem, categoryActive, changeCategory }) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {listItem.map((item, key) => (
        <View
          style={
            categoryActive === key
              ? { ...styles.item, ...styles.itemActive }
              : styles.item
          }
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => changeCategory(key)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
export default CategoriesBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    overflow: "hidden",
  },
  item: {
    paddingHorizontal: 10,
    color: "gray",
  },
  itemActive: {
    borderBottomWidth: 3,
    borderColor: "#FF4E3C",
  },
  title: {
    fontFamily: "Poppins-Medium",
  },
});
