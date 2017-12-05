import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer, RouterState } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { FormState, reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';

import { createSessionAPI } from './api/jophiel/session';
import { createUserAPI } from './api/jophiel/user';
import { sessionReducer, SessionState } from './session/sessionReducer';
import { toastMiddleware } from './toast/toastMiddleware';

export interface AppState {
  session: SessionState;
  router: RouterState;
  form: FormState;
}

const rootReducer = combineReducers<AppState>({
  session: persistReducer({ key: 'session', storage }, sessionReducer),
  router: routerReducer,
  form: formReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const store = createStore<AppState>(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        sessionAPI: createSessionAPI('http://localhost:9001/api/v2/session'),
        userAPI: createUserAPI('http://localhost:9001/api/v2/users'),
      }),
      toastMiddleware,
      routerMiddleware(history)
    ),
  ),
);

export const persistor = persistStore(store);
