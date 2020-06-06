import * as React from "react";
import { View, Button, ActivityIndicator, BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function LoadingScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPressThenBlocked = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPressThenBlocked);

      return () =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          onBackPressThenBlocked
        );
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
