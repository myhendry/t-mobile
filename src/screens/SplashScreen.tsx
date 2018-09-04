import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Button,
  Image,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet
} from "react-native";

import { COLORS, IMAGES } from "../config/constants";
import { getAuthToken } from "../actions";

interface IProps {
  navigation: any;
  getAuthToken: any;
  auth: any;
}

const TOKEN_KEY = "@instore/token";

class SplashScreen extends Component<IProps> {
  async componentDidMount() {
    // AsyncStorage.removeItem(TOKEN_KEY);
    await this.props.getAuthToken();
  }
  render() {
    const { root, top, bottom, imgContainer, imgCover } = styles;
    const { auth } = this.props;

    return (
      <View style={root}>
        <View style={top}>
          <View style={imgContainer}>
            <Image style={imgCover} source={IMAGES.logo} />
          </View>
        </View>
        <View style={bottom}>
          {auth.isLoading && (
            <ActivityIndicator size="large" color={COLORS.WHITE} />
          )}
          <Button
            title="NEXT"
            onPress={() => this.props.navigation.navigate("AuthScreen")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    flex: 3,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY
  },
  bottom: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY,
    width: "80%"
  },
  btnContainer: {
    backgroundColor: COLORS.PRIMARY
  },
  imgCover: {
    width: 250,
    height: 250
  },
  imgContainer: {
    alignItems: "center",
    paddingTop: 150
  },
  indicator: {
    marginBottom: 15
  }
});

const mapState = ({ auth }: any) => {
  return {
    auth
  };
};

export default connect(
  mapState,
  { getAuthToken }
)(SplashScreen);
