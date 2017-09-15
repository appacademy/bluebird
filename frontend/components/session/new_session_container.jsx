import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import NewSession from './new_session';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default withRouter(connect(undefined, mapDispatchToProps)(NewSession));
