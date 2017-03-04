import React from 'react'
import TwoColumnLayoutContainer from 'jophiel/containers/TwoColumnLayoutContainer'
import UserProfileWidgetContainer from 'jophiel/containers/UserProfileWidgetContainer'
import ContentLayout from 'commons/layouts/ContentLayout'
import CoreLayout from 'commons/layouts/CoreLayout'
import ScreenControlContainer from 'jophiel/containers/ScreenControlContainer'
import JophielBreadcrumbsContainer from 'jophiel/containers/JophielBreadcrumbsContainer'
import LinkedClientsViewContainer from 'jophiel/containers/LinkedClientsViewContainer'
import UserProfileSearch from 'jophiel/components/UserProfileSearch'
import Menu from 'commons/components/Menu'

export class JophielLayout extends React.Component {
  render () {
    const { children, isFullscreen } = this.props
    return (
      <CoreLayout
        breadcrumbs={<JophielBreadcrumbsContainer />}
        isFullscreen={isFullscreen}
        linkedClients={<LinkedClientsViewContainer />}
      >
        <TwoColumnLayoutContainer
          upperWidgets={
            [ <UserProfileWidgetContainer key='UserProfileWidgetContainer' /> ]
          }
          menu={<Menu entries={[{ link: '#', label: 'Welcome' }]} />}
          lowerWidgets={[
            <LinkedClientsViewContainer key='LinkedClientsViewContainer'/>,
            <UserProfileSearch key='UserProfileSearch' />
          ]}
        >
          <ScreenControlContainer />
          <ContentLayout>
            { children }
          </ContentLayout>
        </TwoColumnLayoutContainer>
      </CoreLayout>
    )
  }
}

JophielLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  isFullscreen: React.PropTypes.bool.isRequired
}

export default JophielLayout
