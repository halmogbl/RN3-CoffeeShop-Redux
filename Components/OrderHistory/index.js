// A screen component
// main import in each component
import React, { Component } from "react";
// to be able to use these elments in our app
import { Text, ScrollView, FlatList, StyleSheet, View } from "react-native";
import { List, ListItem, Container, Content, Header } from "native-base";
// to connect our app with the reducer so we can git info needed
import { connect } from "react-redux";
import Orders from "./Orders";

class OrderHistory extends Component {
  //  *********************  using navigationOptions  to customize the header of our screen Componnent   ************************
  static navigationOptions = {
    title: "Order History",
    headerRight: null
  };
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    //  *****************************  we mapped through each order that we got from the redecer and saved it in a variable ******************************
    let previousOrders = this.props.previousOrders.map((order, index) => (
      <Orders order={order} key={index} />
    ));

    return (
      <Content>
        <Container>
          <Text
            style={{
              marginTop: 70,
              fontSize: 22,
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: "yellow"
            }}
          >
            List of Previous Orders
          </Text>
          <ScrollView>
            <List>{previousOrders}</List>
          </ScrollView>
        </Container>
      </Content>
    );
  }
}

// to get the info from the reducer using mapStateToProps
const mapStateToProps = state => {
  return {
    previousOrders: state.cartReducer.previousOrders
  };
};
export default connect(mapStateToProps)(OrderHistory);
