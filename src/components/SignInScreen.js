import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { AuthContext } from "../navigation/rootNavigator";

export default function SignInScreen({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
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
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
}
