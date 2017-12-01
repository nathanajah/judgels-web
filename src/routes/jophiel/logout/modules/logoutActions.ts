import { EndSession } from '../../../../modules/session/sessionReducer';

export const logoutActions = {
  logOut: () => {
    return async (dispatch, getState, { toastActions, sessionAPI }) => {
      try {
        await sessionAPI.logOut();
        dispatch(EndSession.create());
      } catch (error) {
        dispatch(toastActions.showErrorToast());
      }
    };
  },
};
