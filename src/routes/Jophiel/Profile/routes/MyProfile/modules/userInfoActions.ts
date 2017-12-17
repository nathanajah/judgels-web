import { selectToken, selectUser } from '../../../../../../modules/session/sessionSelectors';
import { UserInfo } from '../../../../../../modules/api/jophiel/user';
import { toastActions } from '../../../../../../modules/toast/toastActions';

export const userInfoActions = {
  getMine: () => {
    return async (dispatch, getState, { userAPI }) => {
      const token = selectToken(getState);
      const userJid = selectUser(getState).jid;
      return await userAPI.getUserInfo(token, userJid);
    };
  },

  updateMine: (userInfo: UserInfo) => {
    return async (dispatch, getState, { userAPI }) => {
      const token = selectToken(getState);
      const userJid = selectUser(getState).jid;
      await userAPI.updateUserInfo(token, userJid, userInfo);

      toastActions.showSuccessToast('Profile updated.');
    };
  },
};
