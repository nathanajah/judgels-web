import { push } from 'react-router-redux'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const FETCHING_CURRENT_USER = 'FETCHING_CURRENT_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function setCurrentUser (currentUser) {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_USER, currentUser: currentUser })
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

export function logout () {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem('toki-auth-token')
      dispatch({ type: LOGOUT })
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
  error: {
    login: undefined
  }
}

export default function sessionReducer (state = initialState, action) {
  switch (action.type) {
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
    case LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}
