import { toastActions as injectedToastActions } from './toastActions';

export function createToastMiddleware(toastActions) {
  return store => next => action => {
    if (action.payload && action.payload.error) {
        toastActions.showErrorToast(action.payload.error);
    }
    return next(action);
  };
}

export const toastMiddleware = createToastMiddleware(injectedToastActions);
