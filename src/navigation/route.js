import DetailsScreen from "../screens/DetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";

export default {
  initialRouteName: "SIGNIN",
  appRouteName: "MAIN",
  homeRouteName: "HOME_TAB",
  favoriteRouteName: "FAVORITE_TAB",
};

export const HomeRoute = {
  name: "HOME",
  component: HomeScreen,
};

export const DetailsRoute = {
  name: "DETAILS",
  component: DetailsScreen,
};

export const FavoriteRoute = {
  name: "FAVORITE",
  component: FavoriteScreen,
};

export const SignInRoute = {
  name: "SIGNIN",
  component: SignInScreen,
};
