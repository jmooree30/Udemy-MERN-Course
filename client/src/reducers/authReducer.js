import { SET_CURRENT_USER } from "../actions/types";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
import isEmpty from "../validation/is-empty";

const initalState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
