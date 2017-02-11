import React from 'react'
import { connect } from 'react-redux'
import RegisterView from '../components/RegisterView'
import { register, loadRegister } from '../../../store/session'

export class RegisterContainer extends React.Component {
  constructor (props) {
    super(props)
    this.handlSubmitRegister = this.handlSubmitRegister.bind(this)
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(loadRegister())
  }

  handlSubmitRegister (data) {
    const { dispatch } = this.props
    const { username, name, email, password, confirmPassword } = data
    dispatch(register(username, name, email, password, confirmPassword))
  }

  render () {
    const { error, message } = this.props
    return (<RegisterView handleSubmitRegister={this.handlSubmitRegister}
      error={error.register} message={message.register} />)
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  error: state.session.error,
  message: state.session.message
})

RegisterContainer.propTypes = {
  dispatch: React.PropTypes.func,
  error: React.PropTypes.object,
  message: React.PropTypes.object
}

export default connect(mapStateToProps)(RegisterContainer)
