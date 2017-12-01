import { loginReducer, LoginState } from '../login/modules/loginReducer';
import { combineReducers } from 'redux';

export interface JophielState {
  login: LoginState;
}

export const jophielReducer = combineReducers<JophielState>({
  login: loginReducer,
});
