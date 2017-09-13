import {postUser} from '../utils/users';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const createNewUser = formUser => dispatch => {
  return postUser(formUser)
          .then(user => dispatch(receiveCurrentUser(user)));
}
