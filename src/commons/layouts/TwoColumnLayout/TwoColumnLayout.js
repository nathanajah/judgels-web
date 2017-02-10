import React from 'react'

export const TwoColumnLayout = ({ upperWidgets, menus, lowerWidgets, children }) => (
  <div className='row content'>
    <div className='col-md-3'>
      <div className='sidebar clearfix'>
        { upperWidgets }
        { menus }
        { lowerWidgets }
      </div>
    </div>
    <div className='col-md-9'>
      { children }
    </div>
  </div>
)

TwoColumnLayout.propTypes = {
  upperWidgets: React.PropTypes.array,
  menus: React.PropTypes.array,
  lowerWidgets: React.PropTypes.array,
  children: React.PropTypes.node
}

export default TwoColumnLayout
