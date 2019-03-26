import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";
// import HomePage from "../Components/HomePage";
import CoffeeList from "../Components/CoffeeList";
import Profile from "../Components/Profile";
const AuthStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default AuthStack;
