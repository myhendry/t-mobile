import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

import { COLORS } from "../config/constants";
import { googleLogin, facebookLogin } from "../actions";
interface IProps {
  navigation: any;
  googleLogin: any;
  facebookLogin: any;
  auth: any;
}

class AuthScreen extends Component<IProps> {
  render() {
    const {
      root,
      top,
      bottom,
      btnContainer,
      imgContainer,
      imgCover,
      indicator
    } = styles;
    const { googleLogin, facebookLogin, auth } = this.props;

    return (
      <View style={root}>
        <View style={top}>
          <View style={imgContainer}>
            <Image style={imgCover} source={require("../assets/img6.png")} />
          </View>
        </View>
        <View style={bottom}>
          <View style={indicator}>
            {auth.isLoading && (
              <ActivityIndicator size="large" color={COLORS.WHITE} />
            )}
          </View>
          <View style={btnContainer}>
            <SocialIcon
              title="Sign In With Facebook"
              button
              type="facebook"
              onPress={facebookLogin}
            />
            <SocialIcon
              title="Sign In With Google"
              button
              type="google-plus-official"
              onPress={googleLogin}
            />
          </View>
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
  { googleLogin, facebookLogin }
)(AuthScreen);
