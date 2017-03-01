import React from 'react'

export const DisableFullscreenButton = ({ onClick }) => (
  <a
    href='#'
    className='btn btn-default btn-xs'
    data-toggle='tooltip'
    title='disable-fullscreen'
    onClick={onClick}
  >
    <span className='glyphicon glyphicon-resize-small' />
  </a>
)

DisableFullscreenButton.propTypes = {
  onClick: React.PropTypes.func
}

export default DisableFullscreenButton
