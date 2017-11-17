import * as React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

interface HeaderContainerProps {
  currentUser: {
    isAuthenticated: boolean;
    isFetching: boolean;
    username: string;
    realName: string;
  };
  dispatch?: any;
}

export class HeaderContainer extends React.Component<HeaderContainerProps> {
  constructor (props) {
    super(props)
    this._handleClickLogin = this._handleClickLogin.bind(this)
    this._handleClickRegister = this._handleClickRegister.bind(this)
    this._handleClickLogout = this._handleClickLogout.bind(this)
  }

  _handleClickLogin () {
    const { dispatch } = this.props
    dispatch(push(`/login`))
  }

  _handleClickRegister () {
    const { dispatch } = this.props
    dispatch(push(`/join`))
  }

  _handleClickLogout () {
  }

  render () {
    return null;
    // const { currentUser } = this.props
    // return (
    //   <Header
    //     handleClickLogin={this._handleClickLogin}
    //     handleClickRegister={this._handleClickRegister}
    //     handleClickLogout={this._handleClickLogout}
    //     isAuthenticated={currentUser.isAuthenticated}
    //     isFetching={currentUser.isFetching}
    //     username={currentUser.username}
    //     realName={currentUser.realName}
    //   />
    // )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect<any>(mapStateToProps)(HeaderContainer)
