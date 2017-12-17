import { combineReducers } from 'redux';
import { profileReducer, ProfileState } from '../Profile/modules/profileReducer';

export interface JophielState {
  profile: ProfileState;
}

export const jophielReducer = combineReducers<JophielState>({
  profile: profileReducer,
});
