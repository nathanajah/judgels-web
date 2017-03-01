import React from 'react'

export const ShowSidebarButton = ({ onClick }) => (
  <a
    href='#'
    className='btn btn-default btn-xs'
    data-toggle='tooltip'
    title='hide-sidebar'
    onClick={onClick}
  >
    <span className='glyphicon glyphicon-arrow-right' />
  </a>
)

ShowSidebarButton.propTypes = {
  onClick: React.PropTypes.func
}

export default ShowSidebarButton
