import React from 'react'
import TwoColumnLayout from 'commons/layouts/TwoColumnLayout'
import UserProfileWidgetContainer from 'jophiel/containers/UserProfileWidgetContainer'
import ContentLayout from 'commons/layouts/ContentLayout'
import CoreLayout from 'commons/layouts/CoreLayout'
import Breadcrumbs from 'commons/components/Breadcrumbs'
import Menu from 'commons/components/Menu'

export class JophielLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <CoreLayout>
        <TwoColumnLayout
          upperWidgets={
            [ <UserProfileWidgetContainer key='UserProfileWidgetContainer' /> ]
          }
          menu={<Menu entries={[{ link: '#', label: 'Welcome' }]} />}
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
