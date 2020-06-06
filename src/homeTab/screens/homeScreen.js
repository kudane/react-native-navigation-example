import React from "react";
import { Text, View, Button } from "react-native";
import { AuthContext } from "../../navigation/rootNavigator";
import { LoadingContext } from "../../loading/useLoading";

export default function HomeScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const { loadingStart, loadingEnd } = React.useContext(LoadingContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Go to Details"
      />
      <Button
        onPress={() => {
          loadingStart();
          setTimeout(() => {
            signOut();
            loadingEnd();
          }, 1000);
        }}
        title="Sign Out"
      />
    </View>
  );
}
