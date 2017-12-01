import createBrowserHistory from 'history/createBrowserHistory';
import { FormState, reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { routerMiddleware, routerReducer, RouterState } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { createSessionAPI } from '../api/jophiel/session';
import { sessionReducer, SessionState } from '../modules/session/sessionReducer';
import { toastMiddleware } from '../modules/toast/toastMiddleware';
import { jophielReducer, JophielState } from '../routes/jophiel/modules/jophielReducer';

export interface AppState {
  session: SessionState;
  router: RouterState;
  form: FormState;
  jophiel: JophielState;
}

const rootReducer = combineReducers<AppState>({
  session: persistReducer({ key: 'session', storage }, sessionReducer),
  router: routerReducer,
  form: formReducer,
  jophiel: jophielReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const store = createStore<AppState>(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        sessionAPI: createSessionAPI('http://localhost:9001/api/v2/session'),
      }),
      toastMiddleware,
      routerMiddleware(history)
    ),
  ),
);

export const persistor = persistStore(store);
