import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/action-creators/user";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
