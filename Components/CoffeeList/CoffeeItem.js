// so to use onPress for the ListItem componnet
// we need to pass props from CoffeeList OR use withNavigations

import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
// so we need to import here and use it in the bottom by wrapping our class withNavigation
import { withNavigation } from "react-navigation";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class CoffeeItem extends Component {
  handlePress = () => {
    alert("Pressed");
  };
  render() {
    const { coffeeShop } = this.props;
    return (
      <ImageBackground
        source={{ uri: coffeeShop.background }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          // so now we can use this.props.navigation.navigate because we added as props from the coffeeList

          onPress={
            () =>
              this.props.navigation.navigate("CoffeeDetail", {
                coffeeShop: coffeeShop
              })

            //we are sending coffeeShop to coffeeDetail , so we are saying along with coffeeDetail take with you coffeeShop
            // it will be saved inside navigation
            // coffeeShop is coming from this.props.coffeeShop
          }
          button
          style={styles.listitem}
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: coffeeShop.img }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{coffeeShop.name} </Text>
                <Text note style={styles.text}>
                  {coffeeShop.distance}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default withNavigation(CoffeeItem);

// next we should go to the detail page
