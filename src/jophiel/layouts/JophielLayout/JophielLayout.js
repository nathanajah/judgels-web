import React from 'react'
import TwoColumnLayout from 'commons/layouts/TwoColumnLayout'
import ContentLayout from 'commons/layouts/ContentLayout'
import CoreLayout from 'commons/layouts/CoreLayout'
import JophielBreadcrumbsContainer from 'jophiel/containers/JophielBreadcrumbsContainer'
import LinkedClientsViewContainer from 'jophiel/containers/LinkedClientsViewContainer'
import UserProfileSearch from 'jophiel/components/UserProfileSearch'
import Menu from 'commons/components/Menu'

export class JophielLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <CoreLayout
        breadcrumbs={<JophielBreadcrumbsContainer />}
        linkedClients={<LinkedClientsViewContainer />}
      >
        <TwoColumnLayout
          menu={<Menu entries={[{ link: '#', label: 'Welcome' }]} />}
          lowerWidgets={[
            <UserProfileSearch key='UserProfileSearch' />
          ]}
        >
          <ContentLayout>
            { children }
          </ContentLayout>
        </TwoColumnLayout>
      </CoreLayout>
    )
  }
}

JophielLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default JophielLayout
