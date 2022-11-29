import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Rate from "./Rate";
const width = Dimensions.get("window").width;
const ItemDish = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/garan.jpg")}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>Gà chiên xù</Text>
        <View style={styles.box}>
          <Rate size={15} numberRate={4} />
          <Text style={{ color: "gray" }}> 4.5</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.price}>40.000 Đ</Text>
          <Text style={styles.oldprice}>50.000 Đ</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: "hidden",
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  price: {
    fontSize: 18,
    color: "#fc795d",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    marginRight: 5,
    color: "#fc795d",
    fontFamily: "Poppins-Medium",
  },
  oldprice: {
    color: "gray",
    fontFamily: "Poppins-Medium",
    textDecorationLine: "line-through",
  },
  info: {
    width: "100%",
    paddingHorizontal: 10,
  },
  containerImage: {
    marginTop: 5,
  },
  image: {
    height: width / 2 - 10,
    width: width / 2 - 10,
  },
});
export default ItemDish;
