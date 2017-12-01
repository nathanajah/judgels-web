import { EndSession } from '../../../../modules/session/sessionReducer';

export const logoutActions = {
  logOut: () => {
    return async (dispatch) => {
      dispatch(EndSession.create());
    };
  },
};
