import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import TwoColumnLayout from '../TwoColumnLayout'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid'>
    <Header />
    <main className='container'>
      <Breadcrumbs />
      <TwoColumnLayout>
        {children}
      </TwoColumnLayout>
    </main>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
