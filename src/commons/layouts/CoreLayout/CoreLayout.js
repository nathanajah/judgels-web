import React from 'react'
import Header from 'commons/components/Header'
import Footer from 'commons/components/Footer'
import './CoreLayout.scss'
import 'commons/styles/core.scss'

export class CoreLayout extends React.Component {
  render () {
    const { children, breadcrumbs, isFullscreen } = this.props
    let header = null
    let footer = null
    if (!isFullscreen) {
      header = <Header />
      footer = <Footer />
    }
    console.log(isFullscreen);
    console.log(header);
    return (
      <div className='container-fluid'>
        { header }
        <main className='container'>
          { breadcrumbs }
          { children }
        </main>
        { footer }
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  breadcrumbs: React.PropTypes.element.isRequired,
  isFullscreen: React.PropTypes.bool
}

export default CoreLayout
