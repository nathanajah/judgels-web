import { TypedAction } from 'redoodle';

export const LogOutFailure = TypedAction.define('logout/LOG_OUT_FAILURE')<{
  error: any;
}>();
