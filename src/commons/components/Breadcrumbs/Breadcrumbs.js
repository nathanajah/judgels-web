import React from 'react'
import BreadcrumbEntry from './BreadcrumbEntry'

export const Breadcrumbs = ({ entries }) => (
  <div className='primary-content-breadcrumb clearfix'>
    <ol className='breadcrumb col-md-8' vocab='http://schema.org/' typeof='BreadcrumbList'>
      <li property='itemListElement' typeof='ListItem'>
        <a href='#' className='glyphicon glyphicon-home' aria-hidden='true' property='item' typeof='WebPage' />
      </li>
      {
        entries.map(({ label, link }, position) => (
          <BreadcrumbEntry key={position} label={label} link={link} position={position} />
        ))
      }
    </ol>
    <time className='server-time col-md-4 clearfix'>
      <div className='pull-right'>
        <time id='server-time'>Server Time: 03-Feb-2017 17:40:21 +07:00</time>
      </div>
    </time>
  </div>
)

Breadcrumbs.propTypes = {
  entries: React.PropTypes.array.isRequired
}

export default Breadcrumbs
