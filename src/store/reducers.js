import { combineReducers } from 'redux'
import locationReducer from './location'
import sessionReducer from './session'
import { reducer as formReducer } from 'redux-form'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    session: sessionReducer,
    form: formReducer,
    routing: routerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
