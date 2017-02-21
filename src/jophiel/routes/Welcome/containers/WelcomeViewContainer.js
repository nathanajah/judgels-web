import React from 'react'
import { WelcomeView } from '../components/WelcomeView'
import BreadcrumbWrapper from 'jophiel/hoc/BreadcrumbWrapper'

const InnerWelcomeViewContainer = () => (
  <WelcomeView
    linkedClients={[
      { label: 'Repository Gate', link: '#' }
    ]}
  />
)

export const WelcomeViewContainer = BreadcrumbWrapper([{ label: 'Welcome', link: '#' }])(InnerWelcomeViewContainer)

export default WelcomeViewContainer
