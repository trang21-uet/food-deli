import { StatusBar, Platform, View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  Settings,
  MainScreen,
  Login,
  Register,
  Detail,
  OrderManagement,
  OrderDetail,
  OrderStatus,
  Restaurant,
  OrderConfirm,
  SearchCategory,
  AddressManager,
  CreateAddress,
} from "./src";
import { ForgotPassword } from "./src/screens";
import { TouchableOpacity } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();

const theme = {
  dark: false,
  colors: {
    primary: "#fd7a5c",
    background: "#f3f4f8",
    text: "#000",
    card: "#fff",
    white: "#fff",
    black: "#000",
  },
};
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("./src/assets/font/Poppins-Thin.ttf"),
    "Poppins-SemiBold": require("./src/assets/font/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./src/assets/font/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/font/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./src/assets/font/Poppins-Bold.ttf"),
    "Poppins-ExtraLight": require("./src/assets/font/Poppins-ExtraLight.ttf"),
    "Poppins-Black": require("./src/assets/font/Poppins-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        fontFamily: "Poppins-Regular",
      }}
      onLayout={onLayoutRootView}
    >
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="AddressManager">
          <Stack.Screen
            name="MainScreen"
            options={{ headerShown: false }}
            component={MainScreen}
          />
          <Stack.Screen
            name="Settings"
            options={{
              title: "",
              headerTransparent: true,
            }}
            component={Settings}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          />
          <Stack.Screen
            name="ForgotPassword"
            options={{ headerShown: false }}
            component={ForgotPassword}
          />
          <Stack.Screen
            name="OrderConfirm"
            component={OrderConfirm}
            options={{
              title: "Xác nhận mua hàng",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            options={{
              title: "",
              headerTransparent: true,
            }}
            component={Detail}
          />
          <Stack.Screen
            name="Restaurant"
            options={{
              title: "",
              headerTransparent: true,
            }}
            component={Restaurant}
          />
          <Stack.Screen
            name="OrderManagement"
            options={{
              title: "Quản lý đơn hàng",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
              },
            }}
            component={OrderManagement}
          />
          <Stack.Screen
            name="SearchCategory"
            options={({ route }) => ({
              title: route.params.name,
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
              },
              headerRight: () => (
                <TouchableOpacity>
                  <FontAwesome name="filter" size={20} />
                </TouchableOpacity>
              ),
            })}
            component={SearchCategory}
          />
          <Stack.Screen
            name="OrderDetail"
            options={{
              title: "Thông tin đơn hàng",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
                fontWeight: "200",
              },
            }}
            component={OrderDetail}
          />
          <Stack.Screen
            name="OrderStatus"
            options={{
              title: "Tình trạng đơn hàng",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
              },
            }}
            component={OrderStatus}
          />
          <Stack.Screen
            name="AddressManager"
            options={{
              title: "Địa chỉ của tôi",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
              },
            }}
            component={AddressManager}
          />
          <Stack.Screen
            name="CreateAddress"
            options={{
              title: "Tạo địa chỉ mới",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: "Poppins-Medium",
              },
            }}
            component={CreateAddress}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
