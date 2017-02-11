import React from 'react'
import { WelcomeView } from '../components/WelcomeView'

export const WelcomeViewContainer = () => (
  <WelcomeView
    linkedClients={[
      { label: 'Repository Gate', link: '#' }
    ]}
  />
)
