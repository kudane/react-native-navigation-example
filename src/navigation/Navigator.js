import React from "react";
import Route, {
  HomeRoute,
  DetailsRoute,
  FavoriteRoute,
  SignInRoute,
} from "./route";
import useAuthentication, { AuthContext } from "./useAuthentication";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen {...HomeRoute} />
      <HomeStack.Screen {...DetailsRoute} />
    </HomeStack.Navigator>
  );
}

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen {...FavoriteRoute} />
    </FavoriteStack.Navigator>
  );
}

function AppStackScreen() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name={Route.homeRouteName} component={HomeStackScreen} />
      <TabStack.Screen
        name={Route.favoriteRouteName}
        component={FavoriteStackScreen}
      />
    </TabStack.Navigator>
  );
}

export default function RootNavigator() {
  const initialProps = {
    ...Route.initialRouteName,
    mode: "modal",
    headerMode: "none",
  };

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
