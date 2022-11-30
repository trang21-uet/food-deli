import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../../constants/Dimension";
import Materialicons from "react-native-vector-icons/MaterialCommunityIcons";
const data = [
  {
    id: 1,
    title: "Quản lí đơn hàng",
    icon: "md-lock-closed-outline",
    screen: "OrderManagement",
  },
  {
    id: 2,
    title: "Quản lý địa chỉ",
    icon: "ios-location-outline",
    screen: "AddressManager",
  },
  {
    id: 4,
    title: "Giới thiệu về ứng dụng",
    icon: "ios-information-circle-outline",
    screen: "MainScreen",
  },
  {
    id: 5,
    title: "Hướng dẫn",
    icon: "ios-help-circle-outline",
    screen: "MainScreen",
  },
  {
    id: 5,
    title: "Đăng xuất",
    icon: "ios-exit-outline",
    screen: "MainScreen",
  },
];
export default function Settings() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/background1.jpg")}
          resizeMode={"cover"}
        />
        <View style={styles.profile}>
          <Image
            style={styles.imageprofile}
            source={require("../../assets/images/profile.jpg")}
            resizeMode={"cover"}
          />
          <View
            style={{
              justifyContent: "space-between",
              paddingVertical: 8,
              paddingLeft: 10,
            }}
          >
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
              David Backham
            </Text>
            <Text style={{ fontFamily: "Poppins-Regular", color: "gray" }}>
              Backham2001@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        {data.map((element, index) => (
          <ItemSetting item={element} />
        ))}
      </View>
    </View>
  );
}

const ItemSetting = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.button}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name={item.icon} size={25} color={"gray"} />
          <Text style={{ fontFamily: "Poppins-Medium", marginLeft: 10 }}>
            {item.title}
          </Text>
        </View>
        <Materialicons name="chevron-right" size={30} />
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: windowWidth,
  },
  profile: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 5,
    marginTop: -50,
  },
  imageprofile: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#e1e1e1",
  },
});
