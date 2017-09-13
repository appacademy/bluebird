import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/session';
import NewSession from './new_session';

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(undefined, mapDispatchToProps)(NewSession);
