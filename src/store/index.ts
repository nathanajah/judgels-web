import createBrowserHistory from 'history/createBrowserHistory';
import { FormStateMap, reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { routerMiddleware, routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redoodle';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { INITIAL_SESSION_STATE, sessionReducer, SessionState } from './session';

interface AppState {
  session?: SessionState;
  router?: RouterState;
  form?: FormStateMap;
}

const INITIAL_STATE: AppState = {
  session: INITIAL_SESSION_STATE,
  router: undefined,
  form: undefined,
};

const rootReducer = combineReducers<AppState>({
  session: persistReducer({ key: 'session', storage }, sessionReducer),
  router: routerReducer,
  form: formReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
);

export const persistor = persistStore(store);
