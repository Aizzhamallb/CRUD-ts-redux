import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/action-creators/user";
import * as actionCreatorsSearch from "../store/reducer/searchReducer";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { ...actionCreators, ...actionCreatorsSearch },
    dispatch
  );
};
