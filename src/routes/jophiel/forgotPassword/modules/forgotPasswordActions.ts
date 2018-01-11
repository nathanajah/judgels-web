export const forgotPasswordActions = {
  requestToReset: (email: string) => {
    return async (dispatch, getState, { userAPI }) => {
      await userAPI.requestToResetUserPassword(email);
    };
  },
};
