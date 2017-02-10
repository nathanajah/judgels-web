import React from 'react'
import Header from 'commons/components/Header'
import Footer from 'commons/components/Footer'
import Breadcrumbs from 'commons/components/Breadcrumbs'
import './CoreLayout.scss'
import 'commons/styles/core.scss'

export class CoreLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className='container-fluid'>
        <Header />
        <main className='container'>
          <Breadcrumbs />
          { children }
        </main>
        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
