import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";
// import HomePage from "../Components/HomePage";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const myStack = createStackNavigator(
  {
    Login: Login,
    Cart: CoffeeCart,
    CoffeeDetail: CoffeeDetail,
    CoffeeList: CoffeeList
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
const AppContainer = createAppContainer(myStack);

export default AppContainer;
