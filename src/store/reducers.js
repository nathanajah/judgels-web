import { combineReducers } from 'redux'
import locationReducer from './location'
import sessionReducer from './session'
import form from './form'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import breadcrumbsReducer from './breadcrumbs'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    session: sessionReducer,
    form: formReducer.plugin(form),
    routing: routerReducer,
    breadcrumbs: breadcrumbsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
