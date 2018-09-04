import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ActivityIndicator, Animated, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

import { COLORS } from "../config/constants";
import { googleLogin, facebookLogin } from "../actions";
import OnboardingLogo from "../components/OnboardingLogo";
interface IProps {
  navigation: any;
  googleLogin: any;
  facebookLogin: any;
  auth: any;
}

class AuthScreen extends Component<IProps> {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  };

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500
    }).start();
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  componentDidMount() {
    (Animated as any)
      .parallel([this.positionAnim(), this.opacityAnim()])
      .start();
  }

  render() {
    const { root, top, bottom, btnContainer, imgContainer, indicator } = styles;
    const { googleLogin, facebookLogin, auth } = this.props;
    const { opacity, position } = this.state;

    const logoTranslate = position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    });

    return (
      <View style={root}>
        <Animated.View
          style={[
            top,
            {
              transform: [
                {
                  translateY: logoTranslate
                }
              ]
            }
          ]}
        >
          <View style={imgContainer}>
            <OnboardingLogo />
          </View>
        </Animated.View>
        <View style={bottom}>
          <View style={indicator}>
            {auth.isLoading && (
              <ActivityIndicator size="large" color={COLORS.WHITE} />
            )}
          </View>
          <Animated.View style={[btnContainer, { opacity }]}>
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
          </Animated.View>
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
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY
  },
  bottom: {
    flex: 0.9,
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY,
    width: "80%"
  },
  btnContainer: {
    backgroundColor: COLORS.PRIMARY
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
