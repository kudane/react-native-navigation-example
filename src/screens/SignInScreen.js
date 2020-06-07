import React from "react";
import { Button, TextInput, View } from "react-native";
import { AuthContext } from "../navigation/useAuthentication";
import { LoadingContext } from "../loading/useLoading";

function SignInScreen() {
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

export default SignInScreen;
export const SIGNIN_ROUTE_NANE = "SignIn";
