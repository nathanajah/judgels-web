import { TypedAction } from 'redoodle';

import { Toast } from '../../../../modules/toast/toast';

export const LogInSuccess = TypedAction.define('login/LOG_IN_SUCCESS')<{
  toast: Toast;
}>();

export const LogInFailure = TypedAction.define('login/LOG_IN_FAILURE')<{
  toast: Toast;
}>();
