import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const width = Dimensions.get("window").width;
const ItemDish = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("Detail")}
    >
      <View style={styles.info}>
        <Text style={styles.name}>Phở Hà Nội</Text>
        <Text style={styles.restaurant}>Vinmart</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>40.000 Đ</Text>
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
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/phohanoi.jpg")}
          resizeMode={"contain"}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    width: width - 50,
    backgroundColor: "white",
    alignItems: "center",
    margin: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    marginRight: 5,
    color: "#fc795d",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  restaurant: {
    color: "gray",
    marginVertical: 4,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-end",
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
