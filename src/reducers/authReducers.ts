import {
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  GET_USER
} from "../actions/types";

const INITIAL_STATE = {
  authToken: "",
  user: {},
  isLoading: false,
  errorMsg: ""
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...state,
        isLoading: true,
        errorMsg: ""
      };
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case GOOGLE_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: "Login Failed"
      };
    case FACEBOOK_LOGIN:
      return {
        ...state,
        isLoading: true,
        errorMsg: ""
      };
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case FACEBOOK_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: "Login Failed"
      };
    case GET_USER:
      return {
        ...state,
        authToken: action.token,
        user: action.user,
        isLoading: true
      };
    default:
      return state;
  }
};
