import React from "react";
import { Button, TextInput, View } from "react-native";
import { AuthContext } from "../navigation/rootNavigator";
import { LoadingContext } from "../loading/useLoading";

export default function SignInScreen() {
  const { signIn } = React.useContext(AuthContext);
  const { loadingStart, loadingEnd } = React.useContext(LoadingContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign In"
        onPress={() => {
          loadingStart();
          setTimeout(() => {
            signIn();
            loadingEnd();
          }, 1000);
        }}
      />
    </View>
  );
}
