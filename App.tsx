import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet, StatusBar } from "react-native";
import { Provider } from "react-redux";

import { configureStore } from "./src/store/configureStore";
import { NavigationService } from "./src/config/NavigationService";
import Nav from "./src/config/Nav";
import { COLORS, IMAGES } from "./src/config/constants";
import { cacheImages } from "./src/utils/cacheImages";

const store: any = configureStore();

export default class App extends Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages((Object as any).values(IMAGES));

    await Promise.all([...imagesAssets]);

    this.setState({ isReady: true });
  };

  render() {
    const { root } = styles;

    if (!this.state.isReady) {
      return (
        <View style={root}>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
      );
    }
    return (
      <Provider store={store}>
        <Nav
          ref={(navigatorRef: any) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center"
  }
});
