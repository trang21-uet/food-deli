import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import ItemStatus from "./ItemStatus";
import { useNavigation } from "@react-navigation/native";
import Review from "../orderdeatail/review/Review";
const status = [
  {
    id: 1,
    title: "Chờ xác nhận",
    description: "Đơn hàng đang chờ cửa hàng xác nhận",
    active: true,
  },
  {
    id: 2,
    title: "Đang chuẩn bị hàng",
    description: "Đơn hàng được xác nhận và cửa hàng đang chuẩn bị háng",
    active: true,
  },
  {
    id: 3,
    title: "Gửi cho bên vận chuyển",
    description: "Đơn hàng chuẩn bị xong và gửi cho bên bên vận chuyển ",
    active: true,
  },
  {
    id: 4,
    title: "Đang vận chuyển",
    description: "Đơn hàng đang được vận chuyển tới địa chỉ của bạn",
    active: true,
  },
  {
    id: 5,
    title: "Giao thành công",
    description: "Đơn hàng được giao tới người dùng thành công",
    active: false,
  },
  {
    id: 6,
    title: "Đánh giá",
    description: "Đánh giá mức độ hài lòng của bạn đối với đơn hàng",
    active: false,
  },
];
const Index = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      {status.map((item, index) => (
        <ItemStatus
          key={item.id}
          title={item.title}
          description={item.description}
          active={item.active}
        />
      ))}
      <Button
        title="Về trang chủ"
        onPress={() => nav.navigate("MainScreen")}
      ></Button>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 10,
    flex: 1,
    marginTop: 35,
  },
});
