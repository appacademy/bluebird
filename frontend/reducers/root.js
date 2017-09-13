import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';

export default combineReducers({
  session: sessionReducer,
  ui: uiReducer, // {loading: true}
  entities: entitiesReducer
});