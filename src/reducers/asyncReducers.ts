import { ASYNC_LOADING, ASYNC_COMPLETE } from "../actions/asyncActions";

const INITIAL_STATE = {
  isLoading: false
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ASYNC_LOADING:
      return {
        isLoading: true
      };
    case ASYNC_COMPLETE:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};
