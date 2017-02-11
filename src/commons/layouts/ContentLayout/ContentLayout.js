import React from 'react'

export const ContentLayout = ({ children }) => (
  <div className='primary-content clearfix'>
    { children }
  </div>
)

ContentLayout.propTypes = {
  children: React.PropTypes.node
}

export default ContentLayout
