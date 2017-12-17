import { AppState } from '../../../../modules/store';

export function selectUserInfo(state: AppState) {
  return state.jophiel.profile.userInfo;
}
