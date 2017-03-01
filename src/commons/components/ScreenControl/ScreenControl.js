import React from 'react'
import EnableFullscreenButton from './EnableFullscreenButton'
import DisableFullscreenButton from './DisableFullscreenButton'
import ShowSidebarButton from './ShowSidebarButton'
import HideSidebarButton from './HideSidebarButton'

export const ScreenControl = (props) => {
  let fullscreenButton
  let sidebarButton
  if (props.isFullscreen) {
    fullscreenButton = (
      <DisableFullscreenButton onClick={props.disableFullscreen} />
    )
  } else {
    fullscreenButton = (
      <EnableFullscreenButton onClick={props.enableFullscreen} />
    )
  }

  if (props.isSidebarShown) {
    sidebarButton = (
      <HideSidebarButton onClick={props.hideSidebar} />
    )
  } else {
    sidebarButton = (
      <ShowSidebarButton onClick={props.showSidebar} />
    )
  }
  return (
    <div className='box no-margin clearfix'>
      <div className='col-md-12'>
        { sidebarButton }
        { fullscreenButton }
      </div>
    </div>
  )
}

ScreenControl.propTypes = {
  isFullscreen: React.PropTypes.bool,
  isSidebarShown: React.PropTypes.bool,
  enableFullscreen: React.PropTypes.func,
  disableFullscreen: React.PropTypes.func,
  showSidebar: React.PropTypes.func,
  hideSidebar: React.PropTypes.func
}

export default ScreenControl
