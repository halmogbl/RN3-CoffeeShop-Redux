// step one navigation
// yarn add react-navigation
// ********************* stack navigator ***********************

import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import React from "react";
// My BottomTabs
import AuthTab from "./AuthTab";
import CoffeTab from "./CoffeTab";
import OrdersTab from "./OrdersTab";

// icon for the BottomBar
import { Icon } from "native-base";

// createBottomTabNavigator: renders a bottom tab bar which allows you to switch between screens.
const BottomTabs = createBottomTabNavigator(
  {
    AuthTab: AuthTab,
    CoffeTab: CoffeTab,
    OrdersTab: OrdersTab
  },

  {
    // to give style
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconType;
        let iconName;
        if (routeName === "AuthTab") {
          iconName = "ios-person";
          IconType = "Ionicons";
        } else if (routeName === "CoffeTab") {
          iconName = `coffee`;
          IconType = "FontAwesome";
        } else if (routeName === "OrdersTab") {
          iconName = "shopping-cart";
          IconType = "FontAwesome";
        }

        return (
          <Icon
            name={iconName}
            type={IconType}
            style={{ color: tintColor, fontSize: 35 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "blue",
      inactiveTintColor: "lightblue",
      activeBackgroundColor: "lightblue",
      style: {
        backgroundColor: "gray"
      }
    }
  }
);

export default BottomTabs;

//In the example above,
// I passed BottomTab as an argument to the createAppContainer function and saved the return value in a constant called MyContainer and we exported it.

//Finally we  need to import MyContainer and rendered it in our App.js.
