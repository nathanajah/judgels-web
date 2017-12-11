import { get, post } from '../http';

export interface User {
  username: string;
}

export interface UserData {
  username: string;
  password: string;
  name: string;
  email: string;
}

export function createUserAPI(baseURL: string) {
  return {
    usernameExists: (username: string): Promise<boolean> => {
      return get(`${baseURL}/username/${username}/exists`);
    },

    emailExists: (email: string): Promise<boolean> => {
      return get(`${baseURL}/email/${email}/exists`);
    },

    registerUser: (userData: UserData): Promise<void> => {
      return post(`${baseURL}/register`, undefined, userData);
    },

    activateUser: (emailCode: string): Promise<void> => {
      return post(`${baseURL}/activate/${emailCode}`);
    },
  };
}
