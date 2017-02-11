// We only need to import the modules necessary for initial render
import JophielLayout from '../layouts/JophielLayout'
import Home from './Home'
import LoginContainer from './Login/containers/LoginContainer'
import Welcome from './Welcome'
import { refreshCurrentUser } from '../store/session'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const checkAuthentication = (state, replace, callback) => {
    const { dispatch } = store
    const { session } = store.getState()
    const { currentUser } = session
    // TODO: save the auth token when login in localStorage,
    // view routes/store/session.js for more info
    if (!currentUser.username && localStorage.getItem('toki-auth-token')) {
      dispatch(refreshCurrentUser())
    }
    callback()
  }

  return {
    path        : '/',
    component   : JophielLayout,
    indexRoute  : Home,
    childRoutes : [
      { path: 'login', component: LoginContainer },
      Welcome(store)
    ],
    onEnter     : checkAuthentication
  }
}
/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
