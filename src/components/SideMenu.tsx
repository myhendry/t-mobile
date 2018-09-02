import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { COLORS, LAYOUT } from "../config/constants";

interface IProps {
  navigation: any;
}

class SideMenu extends Component<IProps> {
  render() {
    const {
      top,
      root,
      header,
      menu,
      menuItem,
      container,
      textItem,
      iconContainer,
      footer
    } = styles;

    return (
      <View style={root}>
        <View style={header} />
        <View style={top}>
          <ScrollView
            contentContainerStyle={container}
            overScrollMode="never"
            bounces={false}
          >
            <View style={menu}>
              <View style={menuItem}>
                <Text
                  style={textItem}
                  onPress={() => this.props.navigation.navigate("Main")}
                >
                  Main
                </Text>
                <View style={iconContainer}>
                  <Entypo
                    color={COLORS.PRIMARY}
                    size={LAYOUT.ICON_SIZE}
                    name="info"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={footer}>
          <View style={menuItem}>
            <Text
              style={textItem}
              onPress={() => this.props.navigation.navigate("About")}
            >
              About
            </Text>
            <View style={iconContainer}>
              <Entypo
                color={COLORS.PRIMARY}
                size={LAYOUT.ICON_SIZE}
                name="info"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  top: {
    flex: 9
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  header: {
    flex: 1,
    zIndex: 2000,
    backgroundColor: COLORS.WHITE
  },
  menu: {
    flex: 8,
    paddingBottom: 10
  },
  footer: {
    flex: 2,
    paddingTop: 10,
    backgroundColor: COLORS.WHITE
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textItem: {
    color: COLORS.PRIMARY,
    fontSize: 20,
    padding: 10
  },
  iconContainer: { justifyContent: "center", marginRight: 30 }
});

export default SideMenu;
