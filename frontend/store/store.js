import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';

export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState,
  composeWithDevTools(applyMiddleware(createLogger(), thunk))
);
