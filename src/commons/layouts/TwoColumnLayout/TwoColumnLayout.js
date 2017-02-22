import React from 'react'

export const TwoColumnLayout = ({ upperWidgets, menu, lowerWidgets, children }) => (
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

TwoColumnLayout.propTypes = {
  upperWidgets: React.PropTypes.array,
  menu: React.PropTypes.array,
  lowerWidgets: React.PropTypes.array,
  children: React.PropTypes.node
}

export default TwoColumnLayout
