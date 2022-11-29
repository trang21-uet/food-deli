import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import ItemOrder from "../../components/ItemOrder";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    restaurant: {
      name: "Nhất Quán",
      description: "Quán ăn sinh viên",
      distance: 3,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    },
    items: [
      {
        name: "Bún chả",
        price: 35000,
        description: "Thêm bún",
        quantity: 1,
        image:
          "https://img.taste.com.au/1HfSbEeh/w720-h480-cfill-q80/taste/2016/11/bun-cha-93944-1.jpeg",
      },

      {
        name: "Cơm rang dưa bò",
        price: 30000,
        description: "",
        quantity: 2,
        image:
          "https://cdn.beptruong.edu.vn/wp-content/uploads/2018/09/com-rang-dua-bo.jpg",
      },
    ],
  },
];

export default function Cart() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 20,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Giỏ hàng
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {data.map((element) => (
          <ItemOrder />
        ))}
        <ItemOrder />
        <ItemOrder />
      </ScrollView>
      <View style={styles.rowCheckout}>
        <Text style={styles.title}>Tổng chi phí:</Text>
        <Text
          style={{
            ...styles.title,
            fontFamily: "Poppins-Medium",
            color: colors.primary,
          }}
        >
          125.000 Đ
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("OrderConfirm")}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "white",
            fontSize: 16,
          }}
        >
          MUA HÀNG(3)
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    rowCheckout: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 5,
    },
    title: {
      fontFamily: "Poppins-Regular",
      fontSize: 15,
    },
    btn: {
      backgroundColor: "#FF4E3C",
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: "center",
      borderRadius: 5,
      marginTop: 8,
      marginBottom: 5,
    },
  });
