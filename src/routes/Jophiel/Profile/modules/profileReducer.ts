import { setWith, TypedAction, TypedReducer } from 'redoodle';

import { UserInfo } from '../../../../modules/api/jophiel/user';

export interface ProfileState {
  userInfo?: UserInfo;
}

export const INITIAL_STATE: ProfileState = {};

export const SetUserInfo = TypedAction.define('jophiel/profile/SET_USER_INFO')<{
  userInfo: UserInfo;
}>();

export const ClearUserInfo = TypedAction.defineWithoutPayload('jophiel/profile/CLEAR_USER_INFO')();

const createProfileReducer = () => {
  const builder = TypedReducer.builder<ProfileState>();

  builder.withHandler(SetUserInfo.TYPE, (state, payload) => setWith(state, { ...payload }));
  builder.withHandler(ClearUserInfo.TYPE, () => INITIAL_STATE);
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const profileReducer = createProfileReducer();
