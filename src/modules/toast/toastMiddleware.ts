import { Intent, Position, Toaster } from '@blueprintjs/core';

import { RemoteError } from '../../models/error';
import { Toast } from './toast';

const TOASTER = Toaster.create({ position: Position.TOP, className: 'toast' });

export function createToastMiddleware(toaster) {
  return store => next => action => {
    if (action.payload && action.payload.toast) {
      const toast = action.payload.toast as Toast;
      if (toast.error) {
        let message: string;

        if (toast.error instanceof RemoteError) {
          message = 'Internal server error; please try again later.';
        } else {
          message = toast.error.message;
        }

        toaster.show({
          iconName: 'warning-sign',
          message,
          intent: Intent.DANGER,
        });
      }
    }
    return next(action);
  };
}

export const toastMiddleware = createToastMiddleware(TOASTER);
