import { SessionState } from '../modules/session/sessionReducer';

export const sessionState: SessionState = {
  isLoggedIn: true,
  value: {
    user: { jid: 'jid123', username: 'user' },
    session: { token: 'token123' },
  },
};
