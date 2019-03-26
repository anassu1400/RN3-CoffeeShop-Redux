import React, { Component } from "react";
import { Button, Icon } from "native-base";

class CartButton extends Component {
  render() {
    return (
      <Button transparent onPress={() => this.props.navigation.push("Cart")}>
        <Icon name="cart" />
      </Button>
    );
  }
}
export default CartButton;
