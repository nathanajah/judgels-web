// ------------------------------------
// Constants
// ------------------------------------
export const SUBMITTING_FORGOT_PASSWORD = 'SUBMITTING_FORGOT_PASSWORD'
export const ERROR_FORGOT_PASSWORD = 'ERROR_FORGOT_PASSWORD'
export const SUCCESS_FORGOT_PASSWORD = 'SUCCESS_FORGOT_PASSWORD'

// ------------------------------------
// Actions
// ------------------------------------
export function forgotPassword (username, email) {
  return (dispatch) => {
    dispatch({ type: SUBMITTING_FORGOT_PASSWORD })
    setTimeout(() => {
      if (username !== 'nathanajah' || email !== 'nathanajah@nathanajah.com') {
        dispatch({ type: ERROR_FORGOT_PASSWORD, error: 'Username not exists.' })
      } else {
        dispatch({
          type: SUCCESS_FORGOT_PASSWORD,
          message: 'An email with instruction for changing your password has been sent to ' +
            `${email}. Please check your inbox/spam.`
        })
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
    case SUBMITTING_FORGOT_PASSWORD:
      return { ...state, message: 'Loading...', error: undefined }
    case ERROR_FORGOT_PASSWORD:
      return { ...state, message: undefined, error: action.error }
    case SUCCESS_FORGOT_PASSWORD:
      return { ...state, message: action.message, error: undefined }
    default:
      return state
  }
}
