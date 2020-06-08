import "react-native-gesture-handler";
import RootNavigator from "./navigation/rootNavigator";
import withLoading from "./loading/withLoading";

export default function App() {
  return withLoading(RootNavigator);
}
