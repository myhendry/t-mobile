import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "./src/store/configureStore";
import { NavigationService } from "./src/config/NavigationService";
import Nav from "./src/config/Nav";

const store: any = configureStore();
export default () => (
  <Provider store={store}>
    <Nav
      ref={(navigatorRef: any) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);
