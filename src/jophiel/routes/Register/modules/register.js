// ------------------------------------
// Constants
// ------------------------------------
export const REGISTERING_USER = 'REGISTERING_USER'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const LOAD_REGISTER = 'LOAD_REGISTER'

// ------------------------------------
// Actions
// ------------------------------------
export function loadRegister () {
  return (dispatch) => {
    dispatch({ type: LOAD_REGISTER })
  }
}

export function register (username, name, email, password, confirmPassword) {
  return (dispatch) => {
    dispatch({ type: REGISTERING_USER })
    setTimeout(() => {
      if (username && name && email && password &&
        password === confirmPassword) {
        dispatch({
          type: REGISTER_SUCCESS,
          message: `An email for activating your account has been sent to ${email}. Please check your inbox/spam.` })
      } else {
        dispatch({ type: REGISTER_ERROR, error: 'Passwords didn\'t match' })
      }
    }, 1000)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  message: undefined,
  error: undefined
}

export default function registerReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_REGISTER:
      return { ...state, message: undefined, error: undefined }
    case REGISTERING_USER:
      return {
        ...state,
        message: 'Loading...',
        error: undefined
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: action.message,
        error: undefined
      }
    case REGISTER_ERROR:
      return {
        ...state,
        message: undefined,
        error: action.error
      }
    default:
      return state
  }
}
