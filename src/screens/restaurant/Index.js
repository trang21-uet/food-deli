import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
const width = Dimensions.get("window").width;
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import CategoriesBar from "../../components/CategoriesBar";
import ItemDish1 from "../../components/ItemDish1";
const categories = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Cơm tấm",
  },
  {
    id: 3,
    title: "Gà rán",
  },
  {
    id: 4,
    title: "Trà sữa",
  },
  {
    id: 5,
    title: "Bánh mì",
  },
  {
    id: 6,
    title: "Trà sữa",
  },
  {
    id: 7,
    title: "Bánh mì",
  },
  {
    id: 8,
    title: "Trà sữa",
  },
  {
    id: 9,
    title: "Bánh mì",
  },
];
const Index = () => {
  const [indexCategory, setIndexCatgory] = useState(0);
  return (
    <ScrollView>
      <Image
        style={styles.background}
        source={require("../../assets/images/background2.jpg")}
        resizeMode="cover"
      />
      <View style={styles.containerHeader}>
        <Text style={styles.name}>KFC Hà Đông</Text>
        <View style={styles.rating}>
          <FontAwesome name="star" size={18} color="#ffa41c" />
          <Text style={styles.title}>4.9(223 lượt đánh giá)</Text>
        </View>
        <Text style={styles.title}>
          <Ionicons name="location-outline" size={18} />
          số 43, Nguyễn Thái Học, Đống Đa, Hà Nội
        </Text>
      </View>
      <View style={styles.searchbar}>
        <TextInput style={styles.input} placeholder="Tìm kiếm món ăn" />
        <Ionicons name="search" size={20} color={"gray"} />
      </View>

      <CategoriesBar
        listItem={categories}
        categoryActive={indexCategory}
        changeCategory={setIndexCatgory}
      />
      <View style={{ marginTop: 10 }}>
        <ItemDish1 />
        <ItemDish1 />
        <ItemDish1 />
        <ItemDish1 />
        <ItemDish1 />
        <ItemDish1 />
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    height: 200,
    width: width,
  },
  containerHeader: {
    backgroundColor: "white",
    height: 100,
    marginTop: -50,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 5,
  },
  name: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  rating: {
    flexDirection: "row",
  },
  input: {
    fontFamily: "Poppins-Regular",
    flex: 1,
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "gray",
  },
  searchbar: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#e1e1e1",
    paddingVertical: 4,
    marginHorizontal: 20,
    borderRadius: 5,
    marginVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
