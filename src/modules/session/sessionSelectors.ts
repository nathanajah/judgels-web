import { AppState } from '../store';

export function selectToken(getState: () => AppState) {
  return getState().session.token || '';
}

export function selectUser(getState: () => AppState) {
  return getState().session.user || { jid: '', username: '' };
}
