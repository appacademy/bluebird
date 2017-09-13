import { RECEIVE_CURRENT_USER } from '../actions/session';

const defaultState = {
  id: "",
  username: "",
  email: ""
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};
