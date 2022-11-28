import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ItemDish = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("Detail")}
    >
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/garan.jpg")}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>Gà chiên xù</Text>
        <Text style={styles.restaurant}>KFC Hà Đông</Text>
        <View style={styles.footer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>40.000 Đ</Text>
            <Text style={styles.oldprice}>50.000 Đ</Text>
          </View>
          <View style={styles.box}>
            <FontAwesome name="star" size={16} color="#ffa41c" />
            <Text style={{ color: "gray", fontFamily: "Poppins-Regular" }}>
              {" "}
              4.5
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    margin: 10,
    borderRadius: 6,
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
    marginRight: 5,
    color: "#fc795d",
    fontFamily: "Poppins-Medium",
  },
  oldprice: {
    color: "gray",
    fontFamily: "Poppins-Medium",
    textDecorationLine: "line-through",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  restaurant: {
    color: "gray",
    fontFamily: "Poppins-Regular",
    paddingVertical: 3,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerImage: {},
  image: {
    height: 100,
    width: 100,
  },
});
export default ItemDish;
