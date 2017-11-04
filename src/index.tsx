import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import './index.scss'

const store = createStore()
const routes = require('./routes/index').default(store)

ReactDOM.render(
  <AppContainer store={store} routes={routes} />,
  document.getElementById('root') as HTMLElement
);
