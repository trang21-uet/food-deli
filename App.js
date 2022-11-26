import { StatusBar, Platform, View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Settings, MainScreen, Login, Register, Detail } from "./src";
import { ForgotPassword } from "./src/screens";
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
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
