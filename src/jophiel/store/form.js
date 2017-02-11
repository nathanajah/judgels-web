import { REGISTER_SUCCESS, SUCCESS_FORGOT_PASSWORD } from './session'

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
