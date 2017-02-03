import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import TwoColumnLayout from '../TwoColumnLayout'
import UserProfileWidget from '../../components/UserProfileWidget'
import ContentLayout from '../ContentLayout'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid'>
    <Header />
    <main className='container'>
      <Breadcrumbs />
      <TwoColumnLayout
        upperWidgets={
          [ <UserProfileWidget key='UserProfileWidget' username='nathanajah' realName='Nathan Azaria' /> ]
        }
      >
        <ContentLayout />
      </TwoColumnLayout>
    </main>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
