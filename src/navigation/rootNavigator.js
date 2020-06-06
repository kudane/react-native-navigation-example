import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabStackScreen from "./tabNavigator";
import LoadingScreen from "./Loading";

const RootStack = createStackNavigator();

const initialProps = {
  initialRouteName: "Main",
  mode: "modal",
  headerMode: "none",
  screenOptions: {
    cardStyle: { backgroundColor: "rgba(246, 248, 250, 0.75)" },
  },
};

export default function RootNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator {...initialProps}>
          <RootStack.Screen name="Main" component={TabStackScreen} />
          <RootStack.Screen name="Loading" component={LoadingScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
