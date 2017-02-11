import { push } from 'react-router-redux'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const FETCHING_CURRENT_USER = 'FETCHING_CURRENT_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const SIGN_OUT = 'SIGN_OUT'
export const REGISTERING_USER = 'REGISTERING_USER'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const LOAD_REGISTER = 'LOAD_REGISTER'
export const SUBMITTING_FORGOT_PASSWORD = 'SUBMITTING_FORGOT_PASSWORD'
export const ERROR_FORGOT_PASSWORD = 'ERROR_FORGOT_PASSWORD'
export const SUCCESS_FORGOT_PASSWORD = 'SUCCESS_FORGOT_PASSWORD'

// ------------------------------------
// Actions
// ------------------------------------
export function setCurrentUser (currentUser) {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_USER, currentUser: currentUser })
  }
}

export function loadRegister () {
  return (dispatch) => {
    dispatch({ type: LOAD_REGISTER })
  }
}

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

export function refreshCurrentUser () {
  return (dispatch) => {
    dispatch({ type: FETCHING_CURRENT_USER })
    const token = localStorage.getItem('toki-auth-token')
    if (token === 'token') {
      // TODO: this is simulating fetch request to dummy data,
      // change this to request to server to get currently logged user,
      // and save the token to localStorage for futher usage(ex: in routes/index)
      setTimeout(() => {
        const data = {
          username: 'nathanajah',
          realName: 'Nathan Azaria'
        }
        dispatch(setCurrentUser(data))
      }, 1000)
    } else {
      const error = 'Username/email/password invalid'
      dispatch({ type: LOGIN_ERROR, error: error })
    }
  }
}

export function login (username, password) {
  return (dispatch) => {
    if (username === 'nathanajah' && password === 'password') {
      setTimeout(() => {
        const data = {
          username: 'nathanajah',
          realName: 'Nathan Azaria',
          token: 'token'
        }
        localStorage.setItem('toki-auth-token', 'token')
        dispatch(setCurrentUser(data))
        dispatch(push('/'))
      }, 1000)
    } else {
      const error = 'Username/email/password invalid'
      dispatch({ type: LOGIN_ERROR, error: error })
    }
  }
}

export function register (username, name, email, password, confirmPassword) {
  return (dispatch) => {
    dispatch({ type: REGISTERING_USER })
    setTimeout(() => {
      if (password === confirmPassword) {
        dispatch({
          type: REGISTER_SUCCESS,
          message: `An email for activating your account has been sent to ${email}. Please check your inbox/spam.` })
      } else {
        dispatch({ type: REGISTER_ERROR, error: 'Passwords didn\'t match' })
      }
    }, 1000)
  }
}

export function logout () {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem('toki-auth-token')
      dispatch({ type: SIGN_OUT })
    })
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentUser: {
    isAuthenticated: false,
    isFetching: false,
    username: undefined,
    realName: undefined,
    token: undefined
  },
  message: {
    register: undefined,
    forgotPassword: undefined
  },
  error: {
    register: undefined,
    login: undefined,
    forgotPassword: undefined
  }
}

export default function sessionReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_REGISTER:
      return { ...state, message: { ...initialState.message }, error: { ...initialState.error } }
    case REGISTERING_USER:
      return {
        ...state,
        message: { ...state.message, register: 'Loading...' },
        error: { ...state.error, register: initialState.error.register }
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: { ...state.message, register: action.message },
        error: { ...state.error, register: initialState.error.register }
      }
    case REGISTER_ERROR:
      return {
        ...state,
        message: { ...state.message, register: initialState.message.register },
        error: { ...state.error, register: action.error }
      }
    case SUBMITTING_FORGOT_PASSWORD:
      return {
        ...state,
        message: { ...state.message, forgotPassword: 'Loading...' },
        error: { ...state.error, forgotPassword: initialState.error.forgotPassword }
      }
    case ERROR_FORGOT_PASSWORD:
      return {
        ...state,
        message: { ...state.message, forgotPassword: initialState.message.forgotPassword },
        error: { ...state.error, forgotPassword: action.error }
      }
    case SUCCESS_FORGOT_PASSWORD:
      return {
        ...state,
        message: { ...state.message, forgotPassword: action.message },
        error: { ...state.error, forgotPassword: initialState.error.forgotPassword }
      }
    case FETCHING_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isFetching: true,
          isAuthenticated: false,
          username: undefined,
          realName: undefined
        },
        error: { ...state.error, login: undefined }
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.currentUser,
          isFetching: false,
          isAuthenticated: true
        },
        error: { ...state.error, login: undefined }
      }
    case LOGIN_ERROR:
      return { ...state, error: { ...state.error, login: action.error } }
    case SIGN_OUT:
      return { ...initialState }
    default:
      return state
  }
}
