import React from 'react'
import MenuEntry from './MenuEntry'

export const Menu = ({ entries }) => (
  <nav className='menu clearfix'>
    <ul className='nav nav-stacked'>
      {entries.map((entry) => <MenuEntry link={entry.link} label={entry.label} />)}
    </ul>
  </nav>
)

Menu.propTypes = {
  entries: React.PropTypes.array.isRequired
}
