// import { createStackNavigator, createAppContainer } from "react-navigation";
import React from "react";
// import Login from "../Components/Login";
// import HomePage from "../Components/HomePage";
import CoffeeStack from "./CoffeeStack";
import AuthStack from "./AuthStack";
import CartStack from "./OrdersStack";
import { Icon } from "native-base";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Coffee: CoffeeStack,
    Cart: CartStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconType;
        let iconName;
        if (routeName === "Auth") {
          iconName = "ios-person";
          IconType = "Ionicons";
        } else if (routeName === "Coffee") {
          iconName = `coffee`;
          IconType = "FontAwesome";
        } else if (routeName === "Cart") {
          iconName = "shopping-cart";
          IconType = "FontAwesome";
        }
        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            type={IconType}
            size={25}
            style={{ color: tintColor }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "pink",
      inactiveTintColor: "lightblue",
      activeBackgroundColor: "lightblue",
      style: {
        backgroundColor: "#ffd1dc"
      }
    }
  }
);

const AppContainer = createAppContainer(BottomNav);

export default AppContainer;
