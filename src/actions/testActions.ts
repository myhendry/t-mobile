export const TEST_ACTION = "TEST_ACTION";

export const testAction = () => {
  return (dispatch: any) => {
    dispatch({
      type: TEST_ACTION
    });
  };
};
