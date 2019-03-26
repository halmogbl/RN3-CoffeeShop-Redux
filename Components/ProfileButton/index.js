// this is a shopping cart icon
import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Icon
        // it wont work if we do not have withNavigation
        onPress={() => this.props.navigation.navigate("Profile")}
        name="profile"
        type="AntDesign"
      />
    );
  }
}
export default withNavigation(CartButton);
