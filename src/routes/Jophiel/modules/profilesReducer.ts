import { TypedAction, TypedReducer } from 'redoodle';

import { UserProfile } from '../../../modules/api/jophiel/user';

export interface ProfilesState {
  [key: string]: UserProfile | undefined;
}

export const INITIAL_STATE: ProfilesState = {};

export const StoreProfile = TypedAction.define('jophiel/profiles/STORE_PROFILE')<{
  userJid: string;
  profile: UserProfile;
}>();

export const ClearProfile = TypedAction.define('jophiel/profiles/CLEAR_PROFILE')<{
  userJid: string;
}>();

function createProfilesReducer() {
  const builder = TypedReducer.builder<ProfilesState>();

  builder.withHandler(StoreProfile.TYPE, (state, payload) => ({
    ...state,
    [payload.userJid]: payload.profile,
  }));
  builder.withHandler(ClearProfile.TYPE, (state, payload) => {
    let newState = { ...state };
    delete newState[payload.userJid];
    return newState;
  });
  builder.withDefaultHandler(state => (state !== undefined ? state : INITIAL_STATE));

  return builder.build();
}

export const profilesReducer = createProfilesReducer();
