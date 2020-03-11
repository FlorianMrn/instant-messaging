// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer, { initialState, websocketConnect }  from 'src/store/reducer';
import logMiddleware from './logMiddleware';
import socketMiddleware from './socketMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    socketMiddleware,
  ),
);

const store = createStore(
  reducer,
  initialState,
  enhancers,
);

store.dispatch(websocketConnect());

// == Export
export default store;