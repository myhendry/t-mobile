import { NavigationActions } from "react-navigation";

let _navigator: any;

function setTopLevelNavigator(ref: any) {
  _navigator = ref;
}

function navigate(routeName: string, params?: any) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

function popToTop(immediate = true) {
  _navigator.dispatch({
    type: NavigationActions.POP_TO_TOP,
    immediate
  });
}

function reset({ actions, index }: any) {
  _navigator.dispatch({
    type: NavigationActions.RESET,
    index,
    actions
  });
}

export const NavigationService = {
  navigate,
  setTopLevelNavigator,
  back,
  popToTop,
  reset,
  navigator: _navigator
};

(window as any).NavigationService = NavigationService;
