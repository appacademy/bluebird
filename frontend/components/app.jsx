import React from 'react';
import WelcomeBar from './welcome_bar_container';
import NewSessionContainer from './new_session_container';
import ChirpIndexContainer from './chirps/chirp_index_container';

export default () => (
  <div>
    <WelcomeBar />
    <NewSessionContainer />
    <ChirpIndexContainer />
  </div>
);
