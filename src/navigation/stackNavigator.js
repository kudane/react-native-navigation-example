import React from "react";
import Route, { HomeRoute, DetailsRoute, FavoriteRoute } from "./route";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

export default function AppStackScreen() {
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
