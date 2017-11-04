import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'forgotPassword',
  getComponent (nextState, cb) {
      Promise.all([import('./containers/ForgotPasswordContainer/index'), import('./modules/forgotPassword')])
          .then(([{default: ForgotPasswordContainer}, {default: reducer}]) => {

      injectReducer(store, { key: 'forgotPassword', reducer })

      cb(null, ForgotPasswordContainer)
    })
  }
})
