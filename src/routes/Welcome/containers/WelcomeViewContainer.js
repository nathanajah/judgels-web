import { WelcomeView } from '../components/WelcomeView'
import BreadcrumbWrapper from 'hoc/BreadcrumbWrapper'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
  linkedClients:[
    { label: 'Repository Gate', link: '#' }
  ],
  title: 'Single Sign-On - Welcome'
})

export const WelcomeViewContainer =
  BreadcrumbWrapper([{ label: 'Welcome', link: '#' }])(
    connect(mapStateToProps)(WelcomeView)
  )

export default WelcomeViewContainer
