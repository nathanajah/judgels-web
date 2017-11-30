import { SUCCESS_FORGOT_PASSWORD } from '../routes/ForgotPassword/modules/forgotPassword'

const form = {
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
