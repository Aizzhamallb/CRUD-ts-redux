import { API } from "../../helpers/Helpers";
import { UserActionTypes, UserAction } from "../../types/types";
import { Dispatch } from "redux";
import axios from "axios";
import { IUser } from "../../types/IUser";

export const addUser = (newUser: IUser) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await axios.post(API, newUser);
      dispatch({ type: UserActionTypes.GET_USERS });
    } catch (error: any) {
      dispatch({ type: UserActionTypes.GET_USERS_ERROR, payload: error });
    }
  };
};
export const getUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.GET_USERS });
      const res = await axios(`${API}${window.location.search}`);
      dispatch({ type: UserActionTypes.GET_USERS_SUCCESS, payload: res.data });
    } catch (error: any) {
      dispatch({ type: UserActionTypes.GET_USERS_ERROR, payload: error });
    }
  };
};
export const deleteUser = (user: Record<string, any>) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await axios.delete(`${API}/${user}`);
      getUsers();
    } catch (error: any) {
      dispatch({ type: UserActionTypes.GET_USERS_ERROR, payload: error });
    }
  };
};
export const editedUser = (id: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({ type: UserActionTypes.GET_USERS_UPDATE, payload: data });
    } catch (error: any) {
      dispatch({ type: UserActionTypes.GET_USERS_ERROR, payload: error });
    }
  };
};
export const saveEditedUser = (id: any, editedUser: IUser) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.GET_USERS });
      await axios.patch(`${API}/${id}`, editedUser);
    } catch (error: any) {
      dispatch({ type: UserActionTypes.GET_USERS_ERROR, payload: error });
    }
  };
};
