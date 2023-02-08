import { UserState, UserAction, UserActionTypes } from "../../types/types";
import { useDispatch } from "react-redux";

// export const handleChange = (trim: string) => {
//   return (dispatch: Dispatch) =>
//     dispatch({ type: UserActionTypes.SORT_TABLE, payload: trim });
// };

const INIT_STATE = {
  sort: { column: "", direction: "asc" },
};

const filterReducer = (state = INIT_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SORT_TABLE:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};
