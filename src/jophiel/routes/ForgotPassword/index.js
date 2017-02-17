import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'forgotPassword',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ForgotPasswordContainer = require('./containers/ForgotPasswordContainer').default
      const reducer = require('./modules/forgotPassword').default

      injectReducer(store, { key: 'forgotPassword', reducer })

      cb(null, ForgotPasswordContainer)
    })
  }
})
