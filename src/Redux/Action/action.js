import { ActionType } from "../ActionType/actionType";

export const setUserData = (data) => {
  return {
    type: ActionType.SET_USER,
    payload: data,
  };
};
