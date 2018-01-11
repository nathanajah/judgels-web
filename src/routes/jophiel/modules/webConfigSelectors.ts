import { createSelector } from 'reselect';

import { AppState } from '../../../modules/store';

export const selectRecaptchaSiteKey = createSelector(
  [(state: AppState) => state.jophiel.webConfig.value],
  value => value && value.recaptcha && value.recaptcha.siteKey
);
