export interface UserState {
  user: any[];
  edit: any;
  loading: boolean;
  error: null | string;
  pagination: number;
}

export enum UserActionTypes {
  GET_USERS = " GET_USERS",
  GET_USERS_SUCCESS = " GET_USERS_SUCCESS",
  GET_USERS_ERROR = " GET_USERS_ERROR",
  GET_USERS_UPDATE = " GET_USERS_UPDATE",
  PAGE_USERS = "PAGE_USERS",
  SET_SEARCH_INPUT = "SET_SEARCH_INPUT",
}

interface FetchUserActionSuccess {
  type: UserActionTypes.GET_USERS_SUCCESS;
  payload: any;
}
interface FetchUserActionError {
  type: UserActionTypes.GET_USERS_ERROR;
  payload: string;
}
interface FetchUserActionEdit {
  type: UserActionTypes.GET_USERS_UPDATE;
  payload: {};
}
interface FetchUserAction {
  type: UserActionTypes.GET_USERS;
}
interface SetSearchInputAction {
  type: UserActionTypes.SET_SEARCH_INPUT;
  payload: string;
}

export type UserAction =
  | FetchUserActionSuccess
  | FetchUserActionError
  | FetchUserActionEdit
  | FetchUserAction
  | SetSearchInputAction;
