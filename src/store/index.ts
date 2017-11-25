import createBrowserHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { sessionReducer } from './session';

const rootReducer = combineReducers({
  session: persistReducer({ key: 'session', storage }, sessionReducer),
  router: routerReducer,
  form: formReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
);

export const persistor = persistStore(store);
