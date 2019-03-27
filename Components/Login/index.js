// Pressing the Login button and the Signup button will take you to CoffeeList
// so we just add onPress
// onPress={() => this.props.navigation.navigate("CoffeeList")}

import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

class Login extends Component {
  static navigationOptions = {
    title: "Sign In / Sign Up  ",
    headerRight: null
  };
  render() {
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "black" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input autoCorrect={false} autoCapitalize="none" />
                </Item>
                <Body>
                  <Label style={{ color: "black" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            success
            // navigate will allow us to go back to the login page
            // replace we cant go back tho this page " this page is loging in this examble"
            // because we are using replace we dont have to change the headerLeft with a null value
            onPress={() => this.props.navigation.replace("Profile")}
          >
            <Text>Login</Text>
          </Button>
          <Button
            full
            warning
            onPress={() => this.props.navigation.replace("Profile")}
          >
            <Text>Register</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

export default Login;
