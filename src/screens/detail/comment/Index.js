import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComment from "./ItemComment";

const Index = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Đánh giá</Text>
      </View>
      <ScrollView>
        {[1, 1, 1, 1].map((item) => (
          <ItemComment />
        ))}
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#e1e1e1",
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});
