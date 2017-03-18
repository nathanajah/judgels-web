import React from 'react'
import TwoColumnLayout from 'layouts/TwoColumnLayout'
import ContentLayout from 'layouts/ContentLayout'
import CoreLayout from 'layouts/CoreLayout'
import JophielBreadcrumbsContainer from 'containers/JophielBreadcrumbsContainer'
import LinkedClientsViewContainer from 'containers/LinkedClientsViewContainer'
import UserProfileSearch from 'components/UserProfileSearch'
import JophielNavigationContainer from 'containers/JophielNavigationContainer'
import JophielHeaderContainer from 'containers/JophielHeaderContainer'

export class JophielLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <CoreLayout
        header={<JophielHeaderContainer />}
        breadcrumbs={<JophielBreadcrumbsContainer />}
        linkedClients={<LinkedClientsViewContainer />}
      >
        <TwoColumnLayout
          lowerWidgets={[
            <JophielNavigationContainer key='navigation' />,
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
