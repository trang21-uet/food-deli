import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ItemFood from "./orderdeatail/ItemFood";

const OrderDetail = () => {
  return (
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.btn}>
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
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
          Thành tiền:
        </Text>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
          1.000.000 Đ
        </Text>
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e1e1e1",
  },
  btn: {
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
