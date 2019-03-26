import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";
// import HomePage from "../Components/HomePage";
import CoffeeCart from "../Components/CoffeeCart";
import PreviousOrders from "../Components/PreviousOrders";

const myStack = createStackNavigator(
  {
    Cart: CoffeeCart,
    PreviousOrders: PreviousOrders
  },
  {
    initialRouteName: "Cart",
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
