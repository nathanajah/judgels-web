import * as React from 'react'
import CoreLayout from 'layouts/CoreLayout'
import HeaderContainer from 'containers/HeaderContainer'
import BreadcrumbsContainer from 'containers/BreadcrumbsContainer'
import LinkedClientsViewContainer from 'containers/LinkedClientsViewContainer'

interface BaseLayoutProps {
  children: JSX.Element;
  location: {
    pathname: string
  };
}

export class BaseLayout extends React.Component<BaseLayoutProps> {
  render () {
    const { children, location } = this.props
    const currentUser = {
      isAuthenticated: false,
      isFetching: false,
      username: '',
      realName: ''
    }
    return (
      <CoreLayout
        header={<HeaderContainer currentUser={currentUser}/>}
        breadcrumbs={<BreadcrumbsContainer />}
        showBreadcrumb={location.pathname.indexOf('home') === -1}
        linkedClients={<LinkedClientsViewContainer currentPath={location.pathname} />}
      >
        { children }
      </CoreLayout>
    )
  }
}

export default BaseLayout