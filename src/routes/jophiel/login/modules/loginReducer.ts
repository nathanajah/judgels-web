import { TypedAction } from 'redoodle';

import { Toast } from '../../../../modules/toast/toast';

export const LogInSuccess = TypedAction.defineWithoutPayload('login/LOG_IN_SUCCESS')();

export const LogInFailure = TypedAction.define('login/LOG_IN_FAILURE')<{
  toast: Toast;
}>();
