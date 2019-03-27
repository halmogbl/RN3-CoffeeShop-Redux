import React, { Component } from "react";

import { Text } from "react-native";
import { ListItem } from "native-base";
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
