import { post } from '../http';

export interface Session {
  token: string;
}

export function createSessionAPI(baseURL: string) {
  return {
    logIn: (username: string, password: string): Promise<Session> => {
      return post(`${baseURL}/login`, undefined, { username, password });
    },

    logOut: (token: string): Promise<void> => {
      return post(`${baseURL}/logout`, token);
    },
  };
}
