import { postUser, deleteSession, postSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

// const user = {
//   id: 1,
//   username: "",
//   email: ""
// }

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => {
  return postUser(formUser)
          .then(user => dispatch(receiveCurrentUser(user)));
};

export const login = formUser => dispatch => {
  return postSession(formUser)
          .then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  return deleteSession()
          .then(() => dispatch(logoutCurrentUser()));
};
