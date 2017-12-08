import { post } from '../http';

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
    registerUser: (userData: UserData): Promise<void> => {
      return post(`${baseURL}/register`, undefined, userData);
    },
  };
}
