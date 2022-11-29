import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Materialicons from "react-native-vector-icons/MaterialIcons";
const ItemOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shop}>
        <View style={{ flexDirection: "row" }}>
          <Materialicons
            name="storefront"
            size={22}
            color={"gray"}
            activeOpacity={0.8}
          />
          <Text style={styles.shopname}>KFC Hà Đông</Text>
        </View>
        <TouchableOpacity>
          <Materialicons name="chevron-right" size={30} />
        </TouchableOpacity>
      </View>
      {[1, 2, 2].map((item) => (
        <ItemProduct />
      ))}
      <TouchableOpacity style={styles.pill} activeOpacity={0.6}>
        <Text style={{ fontFamily: "Poppins-Regular" }}>Chọn mã giảm giá</Text>
        <Materialicons name="chevron-right" size={30} />
      </TouchableOpacity>
    </View>
  );
};
const ItemProduct = () => {
  return (
    <View style={styles.containerProduct}>
      <Image
        style={styles.image}
        source={require("../assets/images/garan.jpg")}
        resizeMode={"cover"}
      />
      <View style={styles.info}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Gà chiên xù</Text>
          <Text style={styles.description}>
            Gà siêu giòn, siêu ngon, 100 % là thịt gà tươi sống.
          </Text>
        </View>

        <Text style={styles.price}>40.000 Đ</Text>
      </View>
      <View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btncontent}>-</Text>
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 8 }}>
            <Text style={{ fontFamily: "Poppins-Medium" }}>12</Text>
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btncontent}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.total}>80.000 Đ</Text>
      </View>
    </View>
  );
};

export default ItemOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  shop: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: "#e1e1e1",
  },
  shopname: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    marginLeft: 5,
  },
  btn: {
    height: 20,
    width: 20,
    backgroundColor: "#e1e1e1",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btncontent: {
    color: "gray",
    fontFamily: "Poppins-Medium",
  },
  name: {
    fontFamily: "Poppins-Medium",
    lineHeight: 16,
  },
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "gray",
    lineHeight: 16,
  },
  price: {
    fontFamily: "Poppins-Medium",
    color: "#fc795d",
    lineHeight: 20,
  },
  image: {
    height: 70,
    borderRadius: 8,
    width: 70,
  },
  info: {
    flex: 1,
    paddingLeft: 10,
  },
  containerButton: {
    flexDirection: "row",
  },
  containerProduct: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
  },
  total: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  pill: {
    borderWidth: 1,
    marginTop: 15,
    borderColor: "#e1e1e1",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
    alignItems: "center",
  },
});
