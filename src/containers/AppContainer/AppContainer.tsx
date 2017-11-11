import * as React from 'react'
import { Provider, Store } from 'react-redux'

interface AppContainerProps {
  routes: object;
  store: Store<any>;
}

class AppContainer extends React.Component<AppContainerProps, {}> {
  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
