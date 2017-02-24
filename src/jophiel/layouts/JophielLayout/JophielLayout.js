import React from 'react'
import TwoColumnLayoutContainer from 'commons/containers/TwoColumnLayoutContainer'
import UserProfileWidgetContainer from 'jophiel/containers/UserProfileWidgetContainer'
import ContentLayout from 'commons/layouts/ContentLayout'
import CoreLayoutContainer from 'commons/containers/CoreLayoutContainer'
import ScreenControlContainer from 'commons/containers/ScreenControlContainer'
import JophielBreadcrumbsContainer from 'jophiel/containers/JophielBreadcrumbsContainer'
import Menu from 'commons/components/Menu'

export class JophielLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <CoreLayoutContainer
        breadcrumbs={<JophielBreadcrumbsContainer />}
      >
        <TwoColumnLayoutContainer
          upperWidgets={
            [ <UserProfileWidgetContainer key='UserProfileWidgetContainer' /> ]
          }
          menu={<Menu entries={[{ link: '#', label: 'Welcome' }]} />}
        >
          <ScreenControlContainer />
          <ContentLayout>
            { children }
          </ContentLayout>
        </TwoColumnLayoutContainer>
      </CoreLayoutContainer>
    )
  }
}

JophielLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default JophielLayout
