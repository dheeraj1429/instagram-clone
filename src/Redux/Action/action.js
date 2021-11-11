import { ActionType } from "../ActionType/actionType";

export const setUserData = (data) => {
  return {
    type: ActionType.SET_USER,
    payload: data,
  };
};

export const hideAndShowModel = (data) => {
  return {
    type: ActionType.HIDE_MODEL,
    payload: data,
  };
};
