import React from 'react'

export const EnableFullscreenButton = ({ onClick }) => (
  <a
    href='#'
    className='btn btn-default btn-xs'
    data-toggle='tooltip'
    title='enable-fullscreen'
    onClick={onClick}
  >
    <span className='glyphicon glyphicon-fullscreen' />
  </a>
)

EnableFullscreenButton.propTypes = {
  onClick: React.PropTypes.func
}

export default EnableFullscreenButton
