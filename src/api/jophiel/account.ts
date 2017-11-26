import { Session } from './models';
import { post } from '../http';

export interface AccountAPI {
  logIn(username: string, password: string): Promise<Session>;
}

export function createAccountAPI(baseURL: string): AccountAPI {
  return {
    logIn: (username: string, password: string): Promise<Session> => {
      return post(`${baseURL}/login`, { username, password });
    }
  };
}
