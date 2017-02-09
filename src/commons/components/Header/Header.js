import React from 'react'
import './Header.scss'
import Logo from 'assets/images/logo.png'

export const Header = () => (
  <header>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='pull-left'>
            <img className='logo' src={Logo} alt='Logo' />
          </div>
          <div className='title pull-left'>
            <h1>Single Sign-On</h1>
          </div>
          <nav className='right-info pull-right'>
            <div className='languages'>
              <select id='languages' className='form-control selectpicker'>
                <option value='en-US'>EN-US</option>
                <option value='en-GB'>en-GB</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
