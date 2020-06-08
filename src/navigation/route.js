import SignInScreen from '../screens/SignInScreen';
// Home tab
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
// Favorite tab
import FavoriteScreen from '../screens/FavoriteScreen';

const Route = {
    initialRouteName: "Main",
    tab: {
        home: {
            name: "Home_Tab",
            initialRouteName: "Home",
            components: {
                home: {
                    name: "Home",
                    component: HomeScreen,
                },
                details: {
                    name: "Details",
                    component: DetailsScreen,
                },
            }
        },
        favorite: {
            name: "Favorite_Tab",
            initialRouteName: "Favorite",
            components: {
                favorite: {
                    name: "Favorite",
                    component: FavoriteScreen,
                },
            },
        },
    },
    signIn: {
        name: "SignIn",
        component: SignInScreen,
    },
}

export default Route;
