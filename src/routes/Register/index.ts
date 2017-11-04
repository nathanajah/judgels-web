import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'join',
  getComponent (nextState, cb) {
    Promise.all([import('./containers/RegisterContainer/index'), import('./modules/register')])
        .then(([{default: RegisterContainer}, {default: reducer}]) => {

      injectReducer(store, { key: 'register', reducer })

      cb(null, RegisterContainer)
    })
  }
})
