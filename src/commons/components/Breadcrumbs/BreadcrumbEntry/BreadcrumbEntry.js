import React from 'react'

export const BreadcrumbEntry = ({ label, position }) => (
  <li property='itemListElement' typeof='ListItem'>
    <a href='@link.getTarget' className='breadcrumb-link'>{label}</a>
    <meta property='position' content={position + 1} />
  </li>
)

BreadcrumbEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  position: React.PropTypes.number.isRequired
}

export default BreadcrumbEntry
