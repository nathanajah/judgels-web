import React from 'react'
import Header from 'commons/components/Header'
import Footer from 'commons/components/Footer'
import './CoreLayout.scss'
import 'commons/styles/core.scss'

export class CoreLayout extends React.Component {
  render () {
    const { children, breadcrumbs, linkedClients, isFullscreen } = this.props
    let header = null
    let footer = null
    if (!isFullscreen) {
      header = <Header />
      footer = <Footer />
    }
    return (
      <div className='container-fluid'>
        { header }
        <main className='container'>
          <div className='row'>
            { linkedClients }
          </div>
          <div className='row'>
            { breadcrumbs }
            { children }
          </div>
        </main>
        { footer }
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  breadcrumbs: React.PropTypes.element.isRequired,
  linkedClients: React.PropTypes.element.isRequired,
  isFullscreen: React.PropTypes.bool
}

export default CoreLayout
