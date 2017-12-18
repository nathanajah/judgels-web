import { createSelector } from 'reselect';

import { AppState } from '../../../../modules/store';

export const selectUserInfo = createSelector(
  [(state: AppState) => state.jophiel.profile.userInfo],
  userInfo => userInfo);
