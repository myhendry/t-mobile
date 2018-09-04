import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { IMAGES } from "../config/constants";

const OnboardingLogo = () => (
  <View>
    <Image style={styles.imgCover} source={IMAGES.logo} />
  </View>
);

const styles = StyleSheet.create({
  imgCover: {
    width: 250,
    height: 250
  }
});

export default OnboardingLogo;
