import { push } from 'react-router-redux';

import { logoutActions } from './logoutActions';
import { UnauthorizedError } from '../../../../modules/api/error';
import { DelSession } from '../../../../modules/session/sessionReducer';
import { AppState } from '../../../../modules/store';
import { sessionState, token } from '../../../../fixtures/state';

describe('logoutActions', () => {
  let dispatch: jest.Mock<any>;
  const getState = (): Partial<AppState> => ({ session: sessionState });

  let sessionAPI: jest.Mocked<any>;
  let toastActions: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();

    sessionAPI = {
      logOut: jest.fn(),
    };
    toastActions = {
      showToast: jest.fn(),
      showErrorToast: jest.fn(),
    };
  });

  describe('logOut()', () => {
    const { logOut } = logoutActions;
    const doLogOut = async () => logOut()(dispatch, getState, { sessionAPI, toastActions });

    it('calls API to log out', async () => {
      await doLogOut();

      expect(sessionAPI.logOut).toHaveBeenCalledWith(token);
    });

    describe('when the logout is successful', () => {
      beforeEach(async () => {
        await doLogOut();
      });

      it('succeeds with toast', () => {
        expect(toastActions.showToast).toHaveBeenCalledWith('You have been logged out.');
      });

      it('deletes the session', () => {
        expect(dispatch).toHaveBeenCalledWith(DelSession.create());
      });

      it('redirects to root', () => {
        expect(dispatch).toHaveBeenCalledWith(push('/'));
      });
    });

    describe('when the current token is already invalid', () => {
      beforeEach(async () => {
        sessionAPI.logOut.mockImplementation(() => {
          throw new UnauthorizedError();
        });

        await doLogOut();
      });

      it('ends to session anyway', () => {
        expect(dispatch).toHaveBeenCalledWith(DelSession.create());
      });
    });
  });
});
