import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens & Function
import useAuthentication, { AuthContext } from "./useAuthentication";
import AppStackScreen from "./stackNavigator";
import SignInScreen, { SIGNIN_ROUTE_NANE } from "../screens/SignInScreen";

const initialProps = {
  initialRouteName: "SignIn",
  mode: "modal",
  headerMode: "none",
};

const RootStack = createStackNavigator();

export default function RootNavigator() {
  const { state, authContext } = useAuthentication();
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStack.Navigator {...initialProps}>
            {state.isSignin ? (
              <RootStack.Screen name="Main" component={AppStackScreen} />
            ) : (
              <RootStack.Screen
                name={SIGNIN_ROUTE_NANE}
                component={SignInScreen}
              />
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
