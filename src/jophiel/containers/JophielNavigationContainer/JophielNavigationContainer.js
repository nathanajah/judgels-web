import React from 'react'
import Navigation from 'commons/components/Navigation'

export const JophielNavigationContainer = () => (
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

export default JophielNavigationContainer
