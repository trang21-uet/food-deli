import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLOR } from "../constants/Color";
const ItemCounpon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={{ flex: 1 }}>
          <Text>Giảm 15 % giá tất cả sản phẩm</Text>
        </View>

        <View>
          <View style={styles.button}>
            <Text style={{ color: "white" }}>Lưu mã giảm giá</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerRight}>
        <Image
          style={styles.image}
          source={require("../assets/images/restaurantlogo.png")}
          resizeMode={"contain"}
        />
      </View>
    </View>
  );
};

export default ItemCounpon;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
  containerLeft: {
    flex: 2,
    borderStyle: "dashed",
    borderRightWidth: 1,
    borderColor: "gray",
  },
  containerRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    padding: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fd795c",
    borderRadius: 5,
  },
});
