import React from "react";
import { Button, TextInput, View } from "react-native";
import { AuthContext } from "../navigation/useAuthentication";
import { LoadingContext } from "../loading/useLoading";
import * as api from "../functions/api";

export default function SignInScreen() {
  const { signIn } = React.useContext(AuthContext);
  const { loadingStart, loadingEnd } = React.useContext(LoadingContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const mockSignIn = async () => {
    loadingStart();
    const response = await api.get("");
    console.log(JSON.stringify(response));
    if (response) signIn();
    loadingEnd();
  };

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
      <Button title="Sign In" onPress={mockSignIn} />
    </View>
  );
}
