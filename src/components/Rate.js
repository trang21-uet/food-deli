import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Rate = ({ size, numberRate }) => {
  const full = Math.floor(numberRate);
  const half = numberRate - full >= 0.5 ? 1 : 0;
  return (
    <View style={styles.container}>
      <View style={styles.containerStar}>
        {[...Array(full).keys()].map(() => (
          <FontAwesome
            size={size}
            style={styles.star}
            name="star"
            color="#ffa41c"
          />
        ))}
        {[...Array(half).keys()].map(() => (
          <FontAwesome
            size={size}
            style={styles.star}
            name="star-half-empty"
            color="#ffa41c"
          />
        ))}
        {[...Array(5 - full - half).keys()].map(() => (
          <FontAwesome
            size={size}
            style={styles.star}
            name="star"
            color="#e1e1e1"
          />
        ))}
      </View>
    </View>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  containerStar: {
    flexDirection: "row",
  },
  star: {
    marginRight: 2,
  },
});
