import React from 'react';

export default ({session}) => (
  <div>
    <h2>username: {session.username}</h2>
    <h2>email: {session.email}</h2>
  </div>
);
