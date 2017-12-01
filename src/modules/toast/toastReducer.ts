import { TypedAction } from 'redoodle';

export const ShowErrorToast = TypedAction.define('toast/SHOW_ERROR_TOAST')<{
  message: string | JSX.Element;
}>();
