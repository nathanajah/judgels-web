import React from 'react'

export const MenuEntry = ({ link, label }) => (
  <li role='presentation'>
    <a href={link}>
      {label}
    </a>
    <div className='menu-arrow'>
      &gt;
    </div>
  </li>
)

MenuEntry.propTypes = {
  link: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
}

export default MenuEntry
