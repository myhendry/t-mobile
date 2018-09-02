import { ASYNC_LOADING, ASYNC_COMPLETE } from "./types";

export const asyncLoading = () => {
  return {
    type: ASYNC_LOADING
  };
};

export const asyncComplete = () => {
  return {
    type: ASYNC_COMPLETE
  };
};
