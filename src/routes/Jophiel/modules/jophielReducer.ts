import { combineReducers } from 'redux';

import { profilesReducer, ProfilesState } from './profilesReducer';
import { webConfigReducer, WebConfigState } from './webConfigReducer';

export interface JophielState {
  webConfig: WebConfigState;
  profiles: ProfilesState;
}

export const jophielReducer = combineReducers<JophielState>({
  webConfig: webConfigReducer,
  profiles: profilesReducer,
});
