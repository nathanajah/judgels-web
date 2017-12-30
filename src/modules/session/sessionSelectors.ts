import { createSelector } from 'reselect';

import { AppState } from '../store';

export const selectToken = createSelector(
  [(state: AppState) => state.session.value],
  value => (value ? value.session.token : '')
);

export const selectUserJid = createSelector(
  [(state: AppState) => state.session.value],
  value => (value ? value.user.jid : '')
);
