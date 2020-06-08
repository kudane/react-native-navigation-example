import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Route from './route';

//#region Home Tab
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator {...Route.tab.home.initialRouteName}>
      <HomeStack.Screen {...Route.tab.home.components.home} />
      <HomeStack.Screen {...Route.tab.home.components.details} />
    </HomeStack.Navigator>
  );
}
//#endregion

//#region Favorite Tab
const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator {...Route.tab.favorite.initialRouteName}>
      <FavoriteStack.Screen {...Route.tab.favorite.components.favorite} />
    </FavoriteStack.Navigator>
  );
}
//#endregion

//#region App Container & Wrap all Tab
const Tab = createBottomTabNavigator();

function AppStackScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen {...Route.tab.home.name} component={HomeStackScreen} />
      <Tab.Screen {...Route.tab.favorite.name} component={FavoriteStackScreen} />
    </Tab.Navigator>
  );
}
//#endregion

export default AppStackScreen;