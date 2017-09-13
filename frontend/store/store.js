import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';

export default (preloadedState = {}) => createStore(rootReducer, preloadedState, applyMiddleware(thunk));