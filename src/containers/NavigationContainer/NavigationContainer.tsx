import * as React from 'react'
import Navigation from 'components/Navigation'

export const NavigationContainer = () => (
  <Navigation
    entries={[{
      link: '#',
      label: 'Welcome',
      active: true
    }, {
      link: '#',
      label: 'Profile',
      active: false
    }]}
  />
)

export default NavigationContainer
