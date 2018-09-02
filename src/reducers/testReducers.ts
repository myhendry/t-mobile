import { TEST_ACTION } from "../actions/testActions";

const INITIAL_STATE = {
  number: 0
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        number: state.number + 1
      };
    default:
      return state;
  }
};
