import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  userReducer,
  searchReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
