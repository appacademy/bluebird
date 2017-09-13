export const getChirps = () => {
  return $.ajax({
    url: '/api/chirps'
  });
}

export const postLikeToChirp = id => {
  return $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id }
  });
}

export const deleteLikeFromChirp = id => {
  return $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id }
  });
}
