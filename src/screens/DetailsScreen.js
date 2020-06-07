import React from "react";
import { Text, View } from "react-native";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

export default DetailsScreen;
export const DETAILS_ROUTE_NANE = "Details";
