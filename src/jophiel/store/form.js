import { REGISTER_SUCCESS } from '../routes/Register/modules/register'
import { SUCCESS_FORGOT_PASSWORD } from '../routes/ForgotPassword/modules/forgotPassword'

const form = {
  register: (state, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return undefined
      default:
        return state
    }
  },
  forgotPassword: (state, action) => {
    switch (action.type) {
      case SUCCESS_FORGOT_PASSWORD:
        return undefined
      default:
        return state
    }
  }
}

export default form
