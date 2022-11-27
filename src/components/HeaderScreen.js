import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const HeaderScreen = ({ title, back }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={back.goBack}>
        <Ionicons name="chevron-back" size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-back" size={30} color={"transparent"} />
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  btn: {},
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
});
