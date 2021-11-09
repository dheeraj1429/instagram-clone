import { ActionType } from "../ActionType/actionType";

const initalState = {
  userData: [],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
