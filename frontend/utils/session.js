export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

// const user = {
//   id: 1,
//   username: "",
//   email: "",
//   password: "password"
// }

// const data = {
//   user: {
//     id: 1,
//     username: "",
//     email: "",
//     password: "password"
//   }
// }

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
