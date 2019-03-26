import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../CartButton";

class CoffeeList extends Component {
  // to customise
  static navigationOptions = {
    title: "Coffee List",

    // if we want to add something we put in component like headerRight
    headerRight: <CartButton />
  };
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;

    if (loading) {
      return <Spinner />;
    }
    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem
        // i need to pass navigation as props so we can use it in the CoffeeItem Component
        // or just i can use withNavigations instead of passing props
        navigation={this.props.navigation}
        coffeeShop={coffeeShop}
        key={coffeeShop.id}
      />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeList);
