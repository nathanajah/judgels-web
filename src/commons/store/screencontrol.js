// ------------------------------------
// Constants
// ------------------------------------
export const SCREEN_ENABLE_FULLSCREEN = 'SCREEN_ENABLE_FULLSCREEN'
export const SCREEN_DISABLE_FULLSCREEN = 'SCREEN_DISABLE_FULLSCREEN'
export const SCREEN_SHOW_SIDEBAR = 'SCREEN_SHOW_SIDEBAR'
export const SCREEN_HIDE_SIDEBAR = 'SCREEN_HIDE_SIDEBAR'

// ------------------------------------
// Actions
// ------------------------------------

export function enableFullscreen () {
  return {
    type: SCREEN_ENABLE_FULLSCREEN
  }
}

export function disableFullscreen () {
  return {
    type: SCREEN_DISABLE_FULLSCREEN
  }
}

export function showSidebar () {
  return {
    type: SCREEN_SHOW_SIDEBAR
  }
}

export function hideSidebar () {
  return {
    type: SCREEN_HIDE_SIDEBAR
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SCREEN_HIDE_SIDEBAR]: (state, action) => {
    return {
      isFullscreen: state.isFullscreen,
      isSidebarShown: false
    }
  },
  [SCREEN_SHOW_SIDEBAR]: (state, action) => {
    return {
      isFullscreen: state.isFullscreen,
      isSidebarShown: true
    }
  },
  [SCREEN_ENABLE_FULLSCREEN]: (state, action) => {
    return {
      isFullscreen: true,
      isSidebarShown: state.isSidebarShown
    }
  },
  [SCREEN_DISABLE_FULLSCREEN]: (state, action) => {
    return {
      isFullscreen: false,
      isSidebarShown: state.isSidebarShown
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFullscreen: false,
  isSidebarShown: true
}
export default function screenControlReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
