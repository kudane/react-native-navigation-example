import React from "react";
import { Text, View, Button } from "react-native";

export default function FavoriteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is the Favorite screen!</Text>
      <Button title="Open Modal" />
    </View>
  );
}
