import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ItemFood from "./ItemFood";
import { useNavigation } from "@react-navigation/native";
import Review from "./review/Review.js";
const Index = () => {
  const nav = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mã đơn hàng: HKJKHH988</Text>
        <Text style={styles.title}>
          Địa chỉ nhận hàng: Thổ Quan, Đống Đa, Hà Nội
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Trạng thái: Đang giao</Text>
          <TouchableOpacity
            style={styles.btn1}
            activeOpacity={0.8}
            onPress={() => nav.navigate("OrderStatus")}
          >
            <Text style={{ ...styles.title, color: "white" }}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listFood}>
        <ItemFood />
        <ItemFood />
        <ItemFood />
        <ItemFood />
        <ItemFood />
      </View>
      <View
        style={{ height: 10, borderBottomWidth: 1, borderColor: "#e1e1e1" }}
      ></View>
      <View style={styles.footer}>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}>
          Thành tiền:
        </Text>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
          1.000.000 Đ
        </Text>
      </View>
      <Review />
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e1e1e1",
  },
  btn1: {
    backgroundColor: "#FF4E3C",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  listFood: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  title: {
    fontFamily: "Poppins-Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
