import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
});