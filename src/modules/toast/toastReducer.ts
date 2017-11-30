import { TypedAction } from 'redoodle';

export const ShowErrorToast = TypedAction.define('toast/SHOW_TOAST')<{
  message: string | JSX.Element;
}>();
