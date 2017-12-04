import { TypedAction } from 'redoodle';
import { Toast } from '../../../../modules/toast/toast';

export const LogOutSuccess = TypedAction.define('logout/LOG_OUT_SUCCESS')<{
  toast: Toast;
}>();

export const LogOutFailure = TypedAction.define('logout/LOG_OUT_FAILURE')<{
  toast: Toast;
}>();
