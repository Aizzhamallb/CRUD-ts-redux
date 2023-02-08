import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/types";

export const handleChange = (trim: string) => {
  return (dispatch: Dispatch) =>
    dispatch({ type: UserActionTypes.SET_SEARCH_INPUT, payload: trim });
};

export const searchReducer = (
  initialState = "",

  action: UserAction
): string => {
  switch (action.type) {
    case UserActionTypes.SET_SEARCH_INPUT:
      return action.payload;
    default:
      return initialState;
  }
};
