import { Intent, IToaster, Position, Toaster } from '@blueprintjs/core';

import { RemoteError } from '../../models/error';

const TOASTER = Toaster.create({ position: Position.TOP, className: 'toast' });

export function createToastActions(toaster: IToaster) {
  return {
    showErrorToast: (error) => {
      let message: string;

      if (error instanceof RemoteError) {
        message = 'Internal server error; please try again later.';
      } else {
        message = error.message;
      }

      toaster.show({
        iconName: 'warning-sign',
        message,
        intent: Intent.DANGER,
      });
    },
  };
}

export const toastActions = createToastActions(TOASTER);
