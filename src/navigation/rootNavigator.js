import React from "react";
import Route, { SignInRoute } from "./route";
import AppStackScreen from "./stackNavigator";
import useAuthentication, { AuthContext } from "./useAuthentication";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();
const initialProps = {
  ...Route.initialRouteName,
  mode: "modal",
  headerMode: "none",
};

export default function RootNavigator() {
  const { state, authContext } = useAuthentication();
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStack.Navigator {...initialProps}>
            {state.isSignin ? (
              <RootStack.Screen
                name={Route.appRouteName}
                component={AppStackScreen}
              />
            ) : (
              <RootStack.Screen {...SignInRoute} />
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
