import HomeView from '../../components/HomeView'
import BreadcrumbWrapper from 'hoc/BreadcrumbWrapper'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
  title: 'Home'
})

export const HomeViewContainer =
  BreadcrumbWrapper([{ label: 'Home', link: 'home' }])(
    connect(mapStateToProps)(HomeView)
  )

export default HomeViewContainer
