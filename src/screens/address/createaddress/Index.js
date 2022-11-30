import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLOR } from "../../../constants/Color";
import CustomButton from "../../../components/CustomButton";
const Index = () => {
  const [checked, setChecked] = useState(true);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tên tỉnh" />
      <TextInput style={styles.input} placeholder="Tên quận/huyện" />
      <TextInput style={styles.input} placeholder="Tên xã/phường" />
      <TextInput
        style={styles.input}
        placeholder="Tên đường, số nhà, tòa nhà..."
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontFamily: "Poppins-Medium" }}>
          Đặt là địa chỉ mặc định
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setChecked(!checked)}
        >
          <MaterialIcons
            name={checked ? "radio-button-checked" : "radio-button-unchecked"}
            size={25}
            color={COLOR.primary}
          />
        </TouchableOpacity>
      </View>
      <CustomButton title={"GHI NHẬN"} />
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 15,
  },
  input: {
    fontFamily: "Poppins-Regular",
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    marginVertical: 5,
  },
});
