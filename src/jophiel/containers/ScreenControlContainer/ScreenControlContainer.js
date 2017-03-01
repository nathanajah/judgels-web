import { connect } from 'react-redux'
import { showSidebar, hideSidebar, enableFullscreen, disableFullscreen } from 'commons/store/screencontrol'
import ScreenControl from 'commons/components/ScreenControl'

const mapDispatchToProps = {
  showSidebar,
  hideSidebar,
  enableFullscreen,
  disableFullscreen
}

const mapStateToProps = (state) => ({
  isFullscreen: state.screen.isFullscreen,
  isSidebarShown:  state.screen.isSidebarShown
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenControl)
