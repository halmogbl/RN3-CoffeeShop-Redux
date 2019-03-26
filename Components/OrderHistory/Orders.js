import React, { Component } from "react";

import { Text, ScrollView, FlatList, StyleSheet, View } from "react-native";
import { List, ListItem, Container, Content, Header } from "native-base";
class Orders extends Component {
  render() {
    return (
      <ListItem>
        {
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontSize: 17
            }}
          >
            {this.props.order}
          </Text>
        }
      </ListItem>
    );
  }
}

export default Orders;
