import { createSelector } from 'reselect';

import { AppState } from '../../../modules/store';
import { UserProfile } from 'modules/api/jophiel/user';

const selectProfiles = createSelector([(state: AppState) => state.jophiel.profile.values], values => values);

export const selectProfile = (state: AppState, userJid: string): UserProfile | undefined => {
  return selectProfiles(state)[userJid];
};
