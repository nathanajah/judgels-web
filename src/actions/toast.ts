import { Intent, IToaster, Position, Toaster } from '@blueprintjs/core';

import { ShowErrorToast } from '../store/toast';

const TOASTER = Toaster.create({ position: Position.TOP, className: 'toast' });

export function createToastActions(toaster: IToaster) {
  return {
    showErrorToast: (message?: string) => {
      return async dispatch => {
        const actualMessage = message || 'Internal server error; please try again later.';

        dispatch(ShowErrorToast.create({ message: actualMessage }));

        toaster.show({
          iconName: 'warning-sign',
          message: actualMessage,
          intent: Intent.DANGER,
        });
      };
    },
  };
}

export const toastActions = createToastActions(TOASTER);
