import { UserData } from '../../../../modules/api/jophiel/user';

export const registerActions = {
  register: (userData: UserData, successCallback: () => void) => {
    return async (dispatch, getState, { userAPI, toastActions }) => {
      try {
        await userAPI.registerUser(userData);
        successCallback();
      } catch (error) {
        dispatch(toastActions.showErrorToast(error));
      }
    };
  },
};
