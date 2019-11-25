import { SET_TOKEN } from "./actions";
const initialState = {
  token: ""
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    default:
      return state;
  }
  return state;
}
