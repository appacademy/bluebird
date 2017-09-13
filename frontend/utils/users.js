export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};
