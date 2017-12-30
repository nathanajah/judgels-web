import { combineReducers } from 'redux';

import { profileReducer, ProfileState } from './profileReducer';
import { webConfigReducer, WebConfigState } from './webConfigReducer';

export interface JophielState {
  webConfig: WebConfigState;
  profile: ProfileState;
}

export const jophielReducer = combineReducers<JophielState>({
  webConfig: webConfigReducer,
  profile: profileReducer,
});
