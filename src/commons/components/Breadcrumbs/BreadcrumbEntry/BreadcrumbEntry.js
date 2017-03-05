import React from 'react'

export const BreadcrumbEntry = ({ label, link, position }) => (
  <span>
    <a href={link} className='breadcrumb-link'>{label} </a>
    <span>&nbsp;&rsaquo;&nbsp;</span>
  </span>
)

BreadcrumbEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  position: React.PropTypes.number.isRequired
}

export default BreadcrumbEntry
