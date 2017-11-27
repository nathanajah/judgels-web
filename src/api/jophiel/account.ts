import { Session } from './models';
import { post } from '../http';

export function createAccountAPI(baseURL: string) {
  return {
    logIn: (username: string, password: string): Promise<Session> => {
      return post(`${baseURL}/login`, { username, password });
    }
  };
}
