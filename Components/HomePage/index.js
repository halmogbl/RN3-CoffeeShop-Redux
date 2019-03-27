import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

// Navigation
import MyContainer from "../../Navigation";
// import OrderHistory from "../OrderHistory";
// import Profile from "../Profile";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />

        <MyContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
