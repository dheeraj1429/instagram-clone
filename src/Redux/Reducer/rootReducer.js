import { ActionType } from "../ActionType/actionType";

const initalState = {
  userData: [],
  showModelWindow: false,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        userData: action.payload,
      };

    case ActionType.HIDE_MODEL:
      return {
        ...state,
        showModelWindow: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
