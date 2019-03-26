// step one navigation
// yarn add react-navigation
// ********************* stack navigator ***********************

import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import OrderHistory from "../Components/OrderHistory";

// we call the createStackNavigator function. This function takes two parameters and returns a React component in this case "MyStack".
// ,so MyStack  will get the return value of the createStackNavigator
const MyStack = createStackNavigator(
  // 1. first prameter " Route configuration "
  //in this object we will define all the our app's screens, but first we have to import the components.
  {
    LoginScreen: Login,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Profile: Profile,
    OrderHistory: OrderHistory
  },
  // 2. second prameter  " Options "
  // stating the app's initial route, styling the header and footer.
  {
    initialRouteName: "LoginScreen",
    //In the stack navigator's Options object, add cardStyle and set the background color to rgb(20,90,100)
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    // to give style
    defaultNavigationOptions: {
      // headerTransparent: true,
      headerTintColor: "white",
      // to change background color
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      // to make the font bold and the tint color white
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
//App containers are responsible for managing the app and linking the navigator to the app navigator
const MyContainer = createAppContainer(MyStack);

export default MyContainer;

//In the example above,
// I passed MyStack as an argument to the createAppContainer function and saved the return value in a constant called MyContainer and we exported it.

//Finally we  need to import MyContainer and rendered it in our App.js.
