import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Ma don hang: HKJKHH988</Text>
        <Text>Dia chi nhan hang: so 44 nguyen chi thanh, ba dinh, ha noi</Text>
        <View>
          <Text>Trang thai: Dang giao</Text>
          <TouchableOpacity>
            <Text>Chi tiet</Text>
          </TouchableOpacity>
        </View>
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
    borderBottomWidth: 1,
  },
});
