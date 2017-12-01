import { Session } from './models';
import { post } from '../http';

export function createSessionAPI(baseURL: string) {
  return {
    logIn: (username: string, password: string): Promise<Session> => {
      return post(`${baseURL}/login`, { username, password });
    },

    logOut: (): Promise<void> => {
      return post(`${baseURL}/logout`);
    },
  };
}
