import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
