import { TypedAction, TypedReducer } from 'redoodle';

import { UserProfile } from '../../../modules/api/jophiel/user';

export interface ProfileState {
  values: {
    [key: string]: UserProfile | undefined;
  };
}

export const INITIAL_STATE: ProfileState = { values: {} };

export const PutProfile = TypedAction.define('jophiel/profile/PUT')<{
  userJid: string;
  value: UserProfile;
}>();

export const DelProfile = TypedAction.define('jophiel/profile/DEL')<{
  userJid: string;
}>();

function createProfileReducer() {
  const builder = TypedReducer.builder<ProfileState>();

  builder.withHandler(PutProfile.TYPE, (state, payload) => ({
    values: {
      ...state.values,
      [payload.userJid]: payload.value,
    },
  }));
  builder.withHandler(DelProfile.TYPE, (state, payload) => {
    let values = { ...state.values };
    delete values[payload.userJid];
    return { values };
  });
  builder.withDefaultHandler(state => (state !== undefined ? state : INITIAL_STATE));

  return builder.build();
}

export const profileReducer = createProfileReducer();
