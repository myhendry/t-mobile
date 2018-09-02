import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { testAction } from "../actions";

interface IProps {
  navigation: any;
  test: any;
  testAction: any;
}

class MainScreen extends Component<IProps> {
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
