import React from 'react'

export const ContentLayout = ({ children }) => (
  <div className='primary-content clearfix'>
    <div className='col-md-12'>
      { children }
    </div>
  </div>
)

ContentLayout.propTypes = {
  children: React.PropTypes.node
}

export default ContentLayout
