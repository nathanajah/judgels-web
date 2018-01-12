import { SessionState } from '../modules/session/sessionReducer';

export const sessionState: SessionState = {
  isLoggedIn: true,
  user: { jid: 'jid123', username: 'user' },
  token: 'token123',
};
