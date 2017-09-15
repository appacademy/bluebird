import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(undefined, mapDispatchToProps)(Signup);
