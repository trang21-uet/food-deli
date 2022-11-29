import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Rate from "./Rate";
import { useNavigation } from "@react-navigation/native";
const ItemRestaurant = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Restaurant")}
    >
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/background2.jpg")}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>KFC Hà Đông</Text>
        <Text style={styles.address}>
          <Ionicons name="location-outline" size={18} />
          Số 44, Xuân Thủy, Cầu giấy, Hà Nội
        </Text>
        <View style={styles.footer}>
          <Rate size={16} numberRate={4.5} />
          <Text style={{ fontFamily: "Poppins-Regular", color: "gray" }}>
            (100 lượt đánh giá)
          </Text>
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
    margin: 5,
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

  address: {
    color: "gray",
    fontFamily: "Poppins-Regular",
    paddingVertical: 3,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerImage: {},
  image: {
    height: 100,
    width: 100,
  },
});
export default ItemRestaurant;
