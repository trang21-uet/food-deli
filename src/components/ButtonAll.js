import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const ButtonAll = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.title}</Text>
      <TouchableOpacity style={styles.container}>
        <View style={styles.button}>
          <Text style={{ color: "gray" }}>All </Text>
          <AntDesign size={20} color={"gray"} name={"arrowright"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 40,
    width: 60,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default ButtonAll;
