import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewSessionContainer from './session/new_session_container';
import ChirpIndexContainer from './chirps/chirp_index_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <Route path="/signup" component={NewSessionContainer} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
  </div>
);
