import React from 'react'

export const LinkedClientPanel = ({ label, link }) => (
  <div className='panel panel-default'>
    <div className='panel-body'>
      <a href={link}>{label}</a>
    </div>
  </div>
)

LinkedClientPanel.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
}

export default LinkedClientPanel
