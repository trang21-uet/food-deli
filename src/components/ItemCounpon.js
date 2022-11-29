import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const ItemCounpon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: "Poppins-Regular" }}>
            Giảm 15 % giá sản phẩm, chỉ áp đối với 1 số shop nhất định.
          </Text>
        </View>
        <View>
          <View style={styles.button}>
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Regular",
                lineHeight: 20,
              }}
            >
              Lưu mã giảm giá
            </Text>
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
    borderRadius: 5,
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
    borderRadius: 3,
  },
});
