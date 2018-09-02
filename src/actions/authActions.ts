import { Facebook, Google } from "expo";
import { NavigationService } from "../config/NavigationService";

import {
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  ASYNC_LOADING,
  ASYNC_COMPLETE
} from "./types";

export const googleLogin = () => {
  return async (dispatch: any) => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "911931804634-lvlni4orsrc717ggtdp9hnhr5agg3o1t.apps.googleusercontent.com",
        iosClientId:
          "911931804634-in4r0j403bvaeo4hk7kq2niupbgo5qgo.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      dispatch({
        type: ASYNC_LOADING
      });

      if (result.type === "cancel") {
        return;
      }

      console.log("google credential ", result);

      NavigationService.navigate("App");
    } catch (error) {
      dispatch({
        type: GOOGLE_LOGIN_FAIL
      });
      console.log(error);
    }
  };
};

export const facebookLogin = () => {
  return async (dispatch: any) => {
    try {
      let { token, type } = await Facebook.logInWithReadPermissionsAsync(
        "2110083802649068",
        {
          permissions: ["public_profile", "email"]
        }
      );
      dispatch({
        type: ASYNC_LOADING
      });

      if (type === "cancel") {
        return;
      }

      console.log("facebook credential ", token);

      NavigationService.navigate("App");
    } catch (error) {
      dispatch({
        type: FACEBOOK_LOGIN_FAIL
      });
      console.log(error);
    }
  };
};
