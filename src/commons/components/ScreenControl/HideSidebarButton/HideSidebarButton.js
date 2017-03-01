import React from 'react'

export const HideSidebarButton = ({ onClick }) => (
  <a
    href='#'
    className='btn btn-default btn-xs'
    data-toggle='tooltip'
    title='hide-sidebar'
    onClick={onClick}
  >
    <span className='glyphicon glyphicon-arrow-left' />
  </a>
)

HideSidebarButton.propTypes = {
  onClick: React.PropTypes.func
}

export default HideSidebarButton
