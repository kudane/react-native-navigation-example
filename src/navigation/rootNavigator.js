import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// tab screen
import HomeStackScreen from "../homeTab/index";
import FavoriteStackScreen from "../favoriteTab/index";

// common screen
import SignInScreen from "../components/SignInScreen";

// function
import useAuthentication from "./useAuthentication";

const initialProps = {
  initialRouteName: "SignIn",
  mode: "modal",
  headerMode: "none",
  // screenOptions: {
  //   cardStyle: { backgroundColor: "rgba(246, 248, 250, 0.75)" },
  // },
};

const Tab = createBottomTabNavigator();
function AppStackScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();
const AuthContext = React.createContext();

export default function RootNavigator() {
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

export { AuthContext };
