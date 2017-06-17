import React from 'react'
import CoreLayout from 'layouts/CoreLayout'
import HeaderContainer from 'containers/HeaderContainer'
import BreadcrumbsContainer from 'containers/BreadcrumbsContainer'
import LinkedClientsViewContainer from 'containers/LinkedClientsViewContainer'

export class BaseLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <CoreLayout
        header={<HeaderContainer />}
        breadcrumbs={<BreadcrumbsContainer />}
        linkedClients={<LinkedClientsViewContainer />}
      >
        { children }
      </CoreLayout>
    )
  }
}

BaseLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default BaseLayout
