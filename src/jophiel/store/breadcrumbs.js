// ------------------------------------
// Constants
// ------------------------------------
export const BREADCRUMBS_ADD = 'BREADCRUMBS_ADD'
export const BREADCRUMBS_REMOVE = 'BREADCRUMBS_REMOVE'
export const BREADCRUMBS_UPDATE = 'BREADCRUMBS_UPDATE'

// ------------------------------------
// Actions
// ------------------------------------

export function breadcrumbsAdd (entries) {
  return {
    type: BREADCRMBS_ADD,
    payload: entries
  }
}

export function breadcrumbsRemove (entries) {
}

export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
