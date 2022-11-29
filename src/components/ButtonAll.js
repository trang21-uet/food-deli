import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const ButtonAll = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.title}</Text>
      <TouchableOpacity style={styles.button}>
        <AntDesign size={20} name={"arrowright"} />
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
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: "#fc795d",
    marginLeft: 15,
    fontFamily: "Poppins-Medium",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 30,
    width: 35,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
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
