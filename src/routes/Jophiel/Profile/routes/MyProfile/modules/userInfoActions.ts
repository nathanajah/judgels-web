import { selectToken, selectUser } from '../../../../../../modules/session/sessionSelectors';
import { UserInfo } from '../../../../../../modules/api/jophiel/user';
import { toastActions } from '../../../../../../modules/toast/toastActions';
import { SetUserInfo } from '../../../modules/profileReducer';

export const userInfoActions = {
  getMine: () => {
    return async (dispatch, getState, { userAPI }) => {
      const token = selectToken(getState);
      const userJid = selectUser(getState).jid;
      const userInfo =  await userAPI.getUserInfo(token, userJid);

      dispatch(SetUserInfo.create({ userInfo }));
    };
  },

  updateMine: (userInfo: UserInfo) => {
    return async (dispatch, getState, { userAPI }) => {
      const token = selectToken(getState);
      const userJid = selectUser(getState).jid;
      await userAPI.updateUserInfo(token, userJid, userInfo);

      dispatch(SetUserInfo.create({ userInfo }));

      toastActions.showSuccessToast('Profile updated.');
    };
  },
};
