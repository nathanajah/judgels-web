import * as React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider, Store } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

interface AppContainerProps {
  routes: object;
  store: Store<any>;
}

class AppContainer extends React.Component<AppContainerProps, {}> {
  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
