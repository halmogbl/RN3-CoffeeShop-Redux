// **************** createStackNavigator ***********************
// is a function takes two parameters and returns a React component.
// the React component will be passed to the createAppContainer
// ++++++++++++++++++++++ two parameters: ++++++++++++++++++++++
//1. Route configuration object: in this object we will define all of our app's screens,
//   but first we have to import the components.
//2. Options object (optional): a lot can be done in this object, such as
//   styling the header and footer and stating the app's initial route.
// **************** createAppContainer ***********************
// App containers are responsible for managing the app and linking the navigator
// we will pass the React component as an argument to the AppContainer
// then we need to save the returned value in a constant
// we will export the returned value and import it in App.js

import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeTab = createStackNavigator(
  // first prameter: Route configuration
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail
  },
  // second prameter: Options
  {
    initialRouteName: "CoffeeList",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "lightblack"
      },
      headerTextStyle: {
        fontWeight: "bold"
      },
      cardStyle: {
        backgroundColor: "lightblack"
      }
    }
  }
);

export default CoffeTab;
