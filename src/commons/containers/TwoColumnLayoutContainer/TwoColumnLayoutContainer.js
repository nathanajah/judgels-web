import TwoColumnLayout from 'commons/layouts/TwoColumnLayout'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  upperWidgets: ownProps.upperWidgets,
  menu: ownProps.menu,
  lowerWidgest: ownProps.lowerWidgets,
  children: ownProps.children,
  isSidebarShown: state.screen.isSidebarShown
})

export default connect(mapStateToProps)(TwoColumnLayout)
