// Pressing the Login button and the Signup button will take you to CoffeeList
// so we just add onPress
// onPress={() => this.props.navigation.navigate("CoffeeList")}

import React, { Component } from "react";

// NativeBase Components
import { Text, Content } from "native-base";

class Profile extends Component {
  static navigationOptions = {
    title: "My Profile",
    headerRight: null
  };
  render() {
    return (
      <Text
        style={{
          color: "blue",
          marginTop: 100,
          fontSize: 22,
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        Username
      </Text>
    );
  }
}

export default Profile;
