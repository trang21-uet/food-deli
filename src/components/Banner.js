import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WIDTH } from "../constants/Dimension";

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            <Text style={{ color: "white" }}>FOOD</Text> DELIVERY
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              marginTop: -10,
              fontSize: 12,
            }}
          >
            Món gì cũng có
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: "white",
                borderRadius: 5,
              }}
            >
              Khám phá ngay
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/delivery.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
  },
  bannerContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#fec363",
    justifyContent: "space-around",
  },
  text: {
    height: 50,
    justifyContent: "space-around",
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  imageContainer: {
    justifyContent: "flex-end",
    paddingRight: 25,
  },
  btn: {
    backgroundColor: "red",
    alignSelf: "baseline",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 10,
  },
});
