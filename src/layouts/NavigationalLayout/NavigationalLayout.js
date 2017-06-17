import React from 'react'
import TwoColumnLayout from 'layouts/TwoColumnLayout'
import ContentLayout from 'layouts/ContentLayout'
import UserProfileSearch from 'components/UserProfileSearch'
import NavigationContainer from 'containers/NavigationContainer'

export class NavigationalLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
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
    )
  }
}

NavigationalLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default NavigationalLayout
