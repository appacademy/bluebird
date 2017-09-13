import React from 'react';
import {connect} from 'react-redux';
import WelcomeBar from './welcome_bar';

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps)(WelcomeBar);