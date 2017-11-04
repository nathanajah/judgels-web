import * as React from 'react'
import TwoColumnLayout from 'layouts/TwoColumnLayout'
import ContentLayout from 'layouts/ContentLayout'
import UserProfileSearch from 'components/UserProfileSearch'
import NavigationContainer from 'containers/NavigationContainer'

interface NavigationalLayoutProps {
    children: JSX.Element;
}

export class NavigationalLayout extends React.Component<NavigationalLayoutProps> {
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

export default NavigationalLayout
