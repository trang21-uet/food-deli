import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const width = Dimensions.get("window").width;
const ItemDish = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/phohanoi.jpg")}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>Phở Hà Nội</Text>
        <Text style={styles.restaurant}>Vinmart</Text>
        <Text style={styles.price}>40.000 Đ</Text>
        <View style={styles.footer}>
          <View style={styles.box}>
            <Ionicons size={14} color={"gray"} name="ios-time-outline" />
            <Text style={{ color: "gray" }}> 20-40 phút</Text>
          </View>
          <View style={styles.box}>
            <Feather name="star" color={"gray"} size={14} />
            <Text style={{ color: "gray" }}> 4.5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 10,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "#fc795d",
    marginBottom: 5,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurant: {
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    width: "100%",
    paddingHorizontal: 15,
  },
  containerImage: {
    marginTop: 5,
  },
  image: {
    height: 150,
    width: 150,
  },
});
export default ItemDish;
