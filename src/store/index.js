import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import ajax from 'src/middlewares/ajax';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajax),
);

const store = createStore(reducer, enhancers);

export default store;
