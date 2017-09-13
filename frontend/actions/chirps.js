export const RECEIVE_CHIRPS = 'RECEIVE_CHIRPS';
export const RECEIVE_SINGLE_CHIRP = 'RECEIVE_SINGLE_CHIRP';

const receiveChirps = chirps => ({
  type: RECEIVE_CHIRPS,
  chirps
});

const receiveSingleChirp = chirp => ({
  type: RECEIVE_SINGLE_CHIRP,
  chirp
});

export const getChirps = () => dispatch => {
  return $.ajax({
    url: '/api/chirps'
  })
    .then(chirps => dispatch(receiveChirps(chirps)));
}

export const likeChirp = id => dispatch => {
  return $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id }
  })
    .then(chirp => dispatch(receiveSingleChirp(chirp)));
}

export const unLikeChirp = id => dispatch => {
  return $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id }
  })
    .then(chirp => dispatch(receiveSingleChirp(chirp)));
}
