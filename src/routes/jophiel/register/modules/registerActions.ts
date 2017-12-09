import { UserData } from '../../../../modules/api/jophiel/user';

export const registerActions = {
  register: (userData: UserData) => {
    return async (dispatch, getState, { userAPI, toastActions }) => {
      try {
        await userAPI.registerUser(userData);
      } catch (error) {
        dispatch(toastActions.showErrorToast(error));
      }
    };
  },
};
