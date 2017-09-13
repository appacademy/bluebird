import React from 'react';
import ChirpIndex from './chirp_index';
import { getChirps, likeChirp, unLikeChirp } from '../../actions/chirps';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  chirps: Object.keys(state.entities.chirps).map(key => state.entities.chirps[key])
});

const mapDispatchToProps = (dispatch) => ({
  getChirps: () => dispatch(getChirps()),
  likeChirp: id => dispatch(likeChirp(id)),
  unLikeChirp: id => dispatch(unLikeChirp(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChirpIndex);
