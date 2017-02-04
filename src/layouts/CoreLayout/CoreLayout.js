import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import TwoColumnLayout from '../TwoColumnLayout'
import UserProfileWidget from '../../components/UserProfileWidget'
import ContentLayout from '../ContentLayout'
import { logout } from '../../store/session'
import './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends React.Component {
  _handleLogoutClick () {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render () {
    const { currentUser, children } = this.props
    return (
      <div className='container-fluid'>
        <Header />
        <main className='container'>
          <Breadcrumbs />
          <TwoColumnLayout
            upperWidgets={
              [ <UserProfileWidget
                handleLogoutClick={::this._handleLogoutClick}
                key='UserProfileWidget'
                isAuthenticated={currentUser.isAuthenticated}
                isFetching={currentUser.isFetching}
                username={currentUser.username}
                realName={currentUser.realName} /> ]
            }
          >
            <ContentLayout children={children} />
          </TwoColumnLayout>
        </main>
        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  dispatch: React.PropTypes.func,
  currentUser: React.PropTypes.object,
  children : React.PropTypes.element.isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps)(CoreLayout)
