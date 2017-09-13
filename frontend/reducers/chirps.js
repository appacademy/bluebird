import { RECEIVE_CHIRPS, RECEIVE_SINGLE_CHIRP } from '../actions/chirps';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHIRPS:
      const chirps = {};
      action.chirps.forEach(chirp => {
        chirps[chirp.id] = chirp;
      });
      return chirps;
    case RECEIVE_SINGLE_CHIRP:
      return Object.assign({}, state, { [action.chirp.id]: action.chirp });
    default:
      return state;
  }
}
