import React from 'react'

export const LinkedClientsEntry = ({ label, link }) => (
  <div className='clearfix' key={link}>
    <a className='btn btn-primary col-md-12' href={link}>{label}</a>
  </div>
)

LinkedClientsEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
}

export default LinkedClientsEntry
