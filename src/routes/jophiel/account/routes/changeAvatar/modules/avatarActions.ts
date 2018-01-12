import { selectToken, selectUserJid } from '../../../../../../modules/session/sessionSelectors';

export const avatarActions = {
  change: (file: File) => {
    return async (dispatch, getState, { userAPI, toastActions }) => {
      const token = selectToken(getState());
      const userJid = selectUserJid(getState());
      await userAPI.updateUserAvatar(token, userJid, file);
      toastActions.showSuccessToast('Avatar updated.');
    };
  },

  reject: (file: File) => {
    return async (dispatch, getState, { userAPI, toastActions }) => {
      toastActions.showErrorToast(new Error('File too large.'));
    };
  },
};
