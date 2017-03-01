import JophielLayout from 'jophiel/layouts/JophielLayout'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  isFullscreen: state.screen.isFullscreen
})

export default connect(mapStateToProps)(JophielLayout)
