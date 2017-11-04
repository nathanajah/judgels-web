import * as React from 'react'
import { connect } from 'react-redux'
import RegisterView from '../../components/RegisterView'
import { register, loadRegister } from '../../modules/register'

interface RegisterContainerProps {
  dispatch: any;
  register: {
    error: string;
    message: string;
  };
}

export class RegisterContainer extends React.Component<RegisterContainerProps> {
  constructor (props) {
    super(props)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(loadRegister())
  }

  handleSubmitRegister (data) {
    const { dispatch } = this.props
    const { username, name, email, password, confirmPassword } = data
    dispatch(register(username, name, email, password, confirmPassword))
  }

  render () {
    const { register } = this.props
    return (<RegisterView handleSubmitRegister={this.handleSubmitRegister}
      error={register.error} message={register.message} />)
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  register: state.register
})

export default connect<any>(mapStateToProps)(RegisterContainer)
