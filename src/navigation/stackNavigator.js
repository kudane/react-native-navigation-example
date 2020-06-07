import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen, { HOME_ROUTE_NANE } from "../screens/HomeScreen";
import DetailsScreen, { DETAILS_ROUTE_NANE } from "../screens/DetailsScreen";
import FavoriteScreen, { FAVORITE_ROUTE_NANE } from "../screens/FavoriteScreen";

//#region Home Tab
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName={HOME_ROUTE_NANE}>
      <HomeStack.Screen name={HOME_ROUTE_NANE} component={HomeScreen} />
      <HomeStack.Screen name={DETAILS_ROUTE_NANE} component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
//#endregion

//#region Favorite Tab
const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator initialRouteName={FAVORITE_ROUTE_NANE}>
      <FavoriteStack.Screen
        name={FAVORITE_ROUTE_NANE}
        component={FavoriteScreen}
      />
    </FavoriteStack.Navigator>
  );
}
//#endregion

//#region App Container & Wrap all Tab
const Tab = createBottomTabNavigator();

function AppStackScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name={HOME_TAB_ROUTE_NAME} component={HomeStackScreen} />
      <Tab.Screen
        name={FAVORITE_TAB_ROUTE_NAME}
        component={FavoriteStackScreen}
      />
    </Tab.Navigator>
  );
}
//#endregion

export default AppStackScreen;
export const HOME_TAB_ROUTE_NAME = HOME_ROUTE_NANE;
export const FAVORITE_TAB_ROUTE_NAME = FAVORITE_ROUTE_NANE;
