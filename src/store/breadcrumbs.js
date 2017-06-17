// ------------------------------------
// Constants
// ------------------------------------
export const BREADCRUMBS_ADD = 'BREADCRUMBS_ADD'
export const BREADCRUMBS_REMOVE = 'BREADCRUMBS_REMOVE'
export const BREADCRUMBS_UPDATE = 'BREADCRUMBS_UPDATE'

// ------------------------------------
// Actions
// ------------------------------------

export function breadcrumbsAdd (breadcrumbId, entries) {
  return {
    type: BREADCRUMBS_ADD,
    payload: {
      breadcrumbId,
      entries
    }
  }
}

export function breadcrumbsRemove () {
  return {
    type: BREADCRUMBS_REMOVE
  }
}

export function breadcrumbsUpdate (breadcrumbId, entries) {
  return {
    type: BREADCRUMBS_UPDATE,
    payload: {
      breadcrumbId,
      entries
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BREADCRUMBS_ADD]: (state, action) => {
    const newSections = new Map(state.sections)
    newSections.set(action.payload.breadcrumbId, action.payload.entries)
    const newIds = state.breadcrumbIds.slice()
    newIds.push(action.payload.breadcrumbId)
    return {
      sections: newSections,
      breadcrumbIds: newIds
    }
  },
  [BREADCRUMBS_REMOVE]: (state, action) => {
    const newIds = state.breadcrumbIds.slice()
    const removedId = newIds.pop()
    const newSections = new Map(state.sections)
    newSections.delete(removedId)
    return {
      sections: newSections,
      breadcrumbIds: newIds
    }
  },
  [BREADCRUMBS_UPDATE]: (state, action) => {
    const newSections = new Map(state.sections)
    newSections.set(action.payload.breadcrumbId, action.payload.entries)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  sections: new Map(),
  breadcrumbIds: []
}
export default function breadcrumbsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
