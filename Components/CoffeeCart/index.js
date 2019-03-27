import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
import Profile from "../Profile";
import HistoryButton from "../HistoryButton";

class CoffeeCart extends Component {
  static navigationOptions = {
    title: "Coffee Cart",

    // if we want to add something we put in component like headerRight
    headerRight: <HistoryButton />
  };
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default connect(mapStateToProps)(CoffeeCart);
