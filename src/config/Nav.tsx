import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import { Ionicons, Foundation } from "@expo/vector-icons";

import SplashScreen from "../screens/SplashScreen";
import AuthScreen from "../screens/AuthScreen";
import MainScreen from "../screens/MainScreen";
import AboutScreen from "../screens/AboutScreen";
import SideMenu from "../components/SideMenu";
import ButtonHeader from "../components/ButtonHeader";
import { COLORS, LAYOUT } from "./constants";

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }: any) => ({
      title: "MAIN",
      headerLeft: (
        <ButtonHeader side="left" onPress={() => navigation.openDrawer()}>
          <Foundation
            name="list"
            size={LAYOUT.ICON_SIZE}
            color={COLORS.PRIMARY}
          />
        </ButtonHeader>
      )
    })
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }: any) => ({
      title: "ABOUT",
      headerLeft: (
        <ButtonHeader side="left" onPress={() => navigation.openDrawer()}>
          <Foundation
            name="list"
            size={LAYOUT.ICON_SIZE}
            color={COLORS.PRIMARY}
          />
        </ButtonHeader>
      )
    })
  }
});

const App = createDrawerNavigator(
  {
    Main: {
      screen: MainStack
    },
    Add: {
      screen: AboutStack
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: LAYOUT.DRAWER_WIDTH,
    drawerBackgroundColor: COLORS.WHITE
  }
);

export default createSwitchNavigator(
  {
    SplashScreen,
    AuthScreen,
    App
  },
  {
    initialRouteName: "SplashScreen"
  }
);
