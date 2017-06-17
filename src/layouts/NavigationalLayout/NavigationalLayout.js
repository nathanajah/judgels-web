import React from 'react'
import TwoColumnLayout from 'layouts/TwoColumnLayout'
import ContentLayout from 'layouts/ContentLayout'
import CoreLayout from 'layouts/CoreLayout'
import HeaderContainer from 'containers/HeaderContainer'
import BreadcrumbsContainer from 'containers/BreadcrumbsContainer'
import LinkedClientsViewContainer from 'containers/LinkedClientsViewContainer'
import UserProfileSearch from 'components/UserProfileSearch'
import NavigationContainer from 'containers/NavigationContainer'

export class NavigationalLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <CoreLayout
        header={<HeaderContainer />}
        breadcrumbs={<BreadcrumbsContainer />}
        linkedClients={<LinkedClientsViewContainer />}
      >
        <TwoColumnLayout
          lowerWidgets={[
            <NavigationContainer key='navigation' />,
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

NavigationalLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default NavigationalLayout
