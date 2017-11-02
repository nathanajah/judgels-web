import React from 'react'
import CoreLayout from 'layouts/CoreLayout'
import HeaderContainer from 'containers/HeaderContainer'
import BreadcrumbsContainer from 'containers/BreadcrumbsContainer'
import LinkedClientsViewContainer from 'containers/LinkedClientsViewContainer'

export class BaseLayout extends React.Component {
  render () {
    const { children, location } = this.props
    return (
      <CoreLayout
        header={<HeaderContainer />}
        breadcrumbs={<BreadcrumbsContainer />}
        showBreadcrumb={location.pathname.indexOf('home') === -1}
        linkedClients={<LinkedClientsViewContainer currentPath={location.pathname} />}
      >
        { children }
      </CoreLayout>
    )
  }
}

BaseLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  location: React.PropTypes.object.isRequired
}

export default BaseLayout
