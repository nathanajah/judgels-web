// We only need to import the modules necessary for initial render
import BaseLayout from '../layouts/BaseLayout'
import LoginContainer from './Login/containers/LoginContainer'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import Welcome from './Welcome'
import Home from './Home'
import Training from './Training'
import Competition from './Competition'

import { refreshCurrentUser } from '../store/session'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const checkAuthentication = (state, replace, callback) => {
    const { dispatch } = store
    const { session } = store.getState()
    const { currentUser } = session
    // TODO: save the auth token when login in localStorage,
    // view routes/store/session.ts for more info
    if (!currentUser.username && localStorage.getItem('toki-auth-token')) {
      dispatch(refreshCurrentUser())
    }
    callback()
  }

  return {
    path        : '/',
    component   : BaseLayout,
    indexRoute  : { onEnter: ({ params }, replace) => replace('/home') },
    onEnter     : checkAuthentication,
    childRoutes : [
      { path: 'login', component: LoginContainer },
      Register(store),
      ForgotPassword(store),
      Welcome(store),
      Home(store),
      Training(store),
      Competition(store)
    ]
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
