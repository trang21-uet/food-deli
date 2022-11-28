import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const ItemOrder = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => nav.navigate("OrderDetail")}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/images/garan.jpg")}
        resizeMode={"contain"}
      />
      <View style={styles.detail}>
        <View>
          <Text style={{ fontFamily: "Poppins-Bold" }}>
            Cửa hàng: KFC Hà Đông
          </Text>
          <Text style={styles.title}>Mã đơn hàng: HFJFB99343</Text>
          <Text style={styles.title}>Số lượng: 9 món</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Trạng thái: Đang giao</Text>
          </View>
        </View>

        <Text style={styles.price}>200.0000 Đ</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },

  image: {
    height: 100,
    width: 100,
  },
  detail: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 10,
    paddingVertical: 4,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "gray",
    fontSize: 13,
  },
  price: {
    fontFamily: "Poppins-Medium",
  },
});
