import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { MyIcon } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Rate from "../../components/Rate";
import Review from "../../screens/detail/comment/Index";
var width = Dimensions.get("window").width;
const images = [
  {
    id: 1,
    url: require("../../assets/images/phobo.png"),
  },
  {
    id: 1,
    url: require("../../assets/images/phobo.png"),
  },
  {
    id: 1,
    url: require("../../assets/images/phobo.png"),
  },
  {
    id: 1,
    url: require("../../assets/images/phobo.png"),
  },
];
const Index = () => {
  const nav = useNavigation();
  const [imgActive, setimgActive] = useState(0);
  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <ScrollView>
      <View style={styles.closeBtn}>
        <TouchableOpacity onPress={nav.goBack}>
          <MyIcon name="arrow-back" color={"white"} size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerImage}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <Image
              style={styles.wrap}
              source={image.url}
              resizeMode="stretch"
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((element, index) => (
            <View
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}
            ></View>
          ))}
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={styles.name}>Phở 10 Lý Quốc Sư</Text>
        <Text style={styles.description}>
          Là sự kết hợp độc đáo giữa cà phê và hồng trà sữa, vị thơm đặc trưng
          của hồng trà thêm một chút hậu đắng của cafe sẽ làm bạn nhớ mãi.
        </Text>
        <Rate size={18} numberRate={4.6} />
        <View style={styles.price}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Poppins-Medium",
                marginRight: 10,
              }}
            >
              100.000 Đ
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "gray",
                textDecorationLine: "line-through",
              }}
            >
              120.000 Đ
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: "white", fontFamily: "Poppins-Medium" }}>
              Mua ngay
            </Text>
          </TouchableOpacity>
        </View>
        <Review />
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrap: {
    width: width,
    height: 250,
  },
  name: {
    fontSize: 25,
    fontFamily: "Poppins-Medium",
  },
  detail: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  description: {
    color: "gray",
    fontFamily: "Poppins-Regular",
    marginBottom: 5,
  },
  closeBtn: {
    position: "absolute",
    zIndex: 1,
  },

  wrapDot: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 4,
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    height: 8,
    borderRadius: 4,
    width: 25,
    backgroundColor: "#FF4E3C",
  },
  dot: {
    margin: 3,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#e1e1e1",
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#FF4E3C",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
