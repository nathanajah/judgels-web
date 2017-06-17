import React from 'react'
import Navigation from 'components/Navigation'

export const NavigationContainer = () => (
  <Navigation
    entries={[{
      link: '#',
      label: 'Welcome',
      active: true
    }, {
      link: '#',
      label: 'Profile'
    }]}
  />
)

export default NavigationContainer
