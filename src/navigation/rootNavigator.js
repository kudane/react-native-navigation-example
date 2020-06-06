import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//#region import other
import HomeStackScreen from "../homeTab/index";
import FavoriteStackScreen from "../favoriteTab/index";
import SignInScreen from "../components/SignInScreen";
import useAuthentication from "./useAuthentication";
//#endregion

//#region App Container
const Tab = createBottomTabNavigator();

function AppStackScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
    </Tab.Navigator>
  );
}
//#endregion

//#region Root Navigator
const initialProps = {
  initialRouteName: "SignIn",
  mode: "modal",
  headerMode: "none",
};
const RootStack = createStackNavigator();
const AuthContext = React.createContext();

function RootNavigator() {
  const { state, context } = useAuthentication();
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <RootStack.Navigator {...initialProps}>
            {state.isSignin ? (
              <RootStack.Screen name="Main" component={AppStackScreen} />
            ) : (
              <RootStack.Screen name="SignIn" component={SignInScreen} />
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
//#endregion

export default RootNavigator;
export { AuthContext };
