import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ItemFood = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/garan.jpg")}
        resizeMode={"contain"}
      />
      <View style={styles.detail}>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 15 }}>
          Gà xào xả ớt
        </Text>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          Lorem ipsum is simply dummy text of the printing
        </Text>
        <View style={styles.price}>
          <Text
            style={{
              color: "#FF4E3C",
              fontFamily: "Poppins-Medium",
            }}
          >
            800.000 Đ
          </Text>
          <Text style={styles.title}>x3</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemFood;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 10,
  },
  detail: {
    flex: 1,
    paddingLeft: 8,
    paddingVertical: 3,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "gray",
    fontSize: 13,
  },
});
