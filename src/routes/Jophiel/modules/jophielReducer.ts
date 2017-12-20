import { combineReducers } from 'redux';

import { profilesReducer, ProfilesState } from './profilesReducer';

export interface JophielState {
  profiles: ProfilesState;
}

export const jophielReducer = combineReducers<JophielState>({
  profiles: profilesReducer,
});
