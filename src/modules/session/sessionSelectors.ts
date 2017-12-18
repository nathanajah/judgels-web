import { createSelector } from 'reselect';

import { AppState } from '../store';

export const selectToken = createSelector(
  [(state: AppState) => state.session.token],
  token => token || '');

export const selectUserJid = createSelector(
  [(state: AppState) => state.session.user],
  user => user ? user.jid : '');
