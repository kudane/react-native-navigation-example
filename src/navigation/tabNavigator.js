import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../homeTab/index";
import FavoriteStackScreen from "../favoriteTab/index";

const Tab = createBottomTabNavigator();

export default function TabStackScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
    </Tab.Navigator>
  );
}
