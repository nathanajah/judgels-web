import { TypedAction } from 'redoodle';

import { Toast } from '../../../../modules/toast/toast';

export const RegisterFailure = TypedAction.define('register/REGISTER_FAILURE')<{
  toast: Toast;
}>();
