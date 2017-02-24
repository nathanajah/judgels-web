import CoreLayout from 'commons/layouts/CoreLayout'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  breadcrumbs: ownProps.breadcrumbs,
  isFullscreen: state.screen.isFullscreen
})

export default connect(mapStateToProps)(CoreLayout)
