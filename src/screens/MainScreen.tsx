import React, { Component } from "react";
import { AsyncStorage, Text, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { testAction } from "../actions";

interface IProps {
  navigation: any;
  test: any;
  testAction: any;
}
const TOKEN_KEY = "@instore/token";
class MainScreen extends Component<IProps> {
  async componentDidMount() {
    const data = await AsyncStorage.getItem(TOKEN_KEY);
    console.log("data ", data);
  }

  render() {
    const { root } = styles;
    const { testAction, test } = this.props;
    return (
      <View style={root}>
        <Text> {test.number && test.number} </Text>
        <Button title="Test" onPress={testAction} />
      </View>
    );
  }
}

const mapState = (state: any) => {
  return {
    test: state.test
  };
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(
  mapState,
  { testAction }
)(MainScreen);
