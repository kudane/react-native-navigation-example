import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "./screens/FavoriteScreen";

const FavoriteStack = createStackNavigator();

export default function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator initialRouteName="Favorite">
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
}