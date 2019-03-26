import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { List, ListItem } from "native-base";
class PreviousOrders extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Order History",
      headerRight: null
    };
  };
  render() {
    const previousOrders = this.props.previousOrders.map(order => (
      <ListItem>previousOrders</ListItem>
    ));
    return (
      <Container>
        <Text>List of previousOrders</Text>
        <List>{previousOrders}</List>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    previousOrders: state.cartReducer.previousOrders
  };
};
export default connect(mapStateToProps)(PreviousOrders);
