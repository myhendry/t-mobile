import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "../reducers";

export const configureStore = (preloadedState?: any) => {
  const middlewares = [thunk];

  if (__DEV__) {
    // middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
