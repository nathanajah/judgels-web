import React from 'react'

export const TwoColumnLayout = ({ upperWidgets, menu, lowerWidgets, children, isSidebarShown }) => {
  if (isSidebarShown) {
    return (
      <div className='row content'>
        <div className='col-md-3'>
          <div className='sidebar clearfix'>
            { upperWidgets }
            { menu }
            { lowerWidgets }
          </div>
        </div>
        <div className='col-md-9'>
          { children }
        </div>
      </div>
    )
  } else {
    return (
      <div className='row content'>
        <div className='col-md-12'>
          { children }
        </div>
      </div>
    )
  }
}

TwoColumnLayout.propTypes = {
  upperWidgets: React.PropTypes.array,
  menu: React.PropTypes.array,
  lowerWidgets: React.PropTypes.array,
  children: React.PropTypes.node,
  isSidebarShown: React.PropTypes.bool
}

export default TwoColumnLayout
