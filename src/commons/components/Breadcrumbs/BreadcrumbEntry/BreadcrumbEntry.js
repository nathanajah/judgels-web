import React from 'react'

export const BreadcrumbEntry = ({ label, link, position }) => (
  <li property='itemListElement' typeof='ListItem'>
    <a href={link} className='breadcrumb-link'>{label}</a>
    <meta property='position' content={position + 1} />
  </li>
)

BreadcrumbEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  position: React.PropTypes.number.isRequired
}

export default BreadcrumbEntry
