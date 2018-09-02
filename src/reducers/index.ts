import { combineReducers } from "redux";

import testReducers from "./testReducers";
import auth from "./authReducers";
import async from "./asyncReducers";

export default combineReducers({
  test: testReducers,
  auth,
  async
});
