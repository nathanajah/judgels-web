import { get, post, put } from '../http';

export interface User {
  jid: string;
  username: string;
}

export interface UserInfo {
  name?: string;
  institution?: string;
}

export interface UserRegistrationData {
  username: string;
  password: string;
  email: string;
  name?: string;
}

export function createUserAPI(baseURL: string) {
  return {
    usernameExists: (username: string): Promise<boolean> => {
      return get(`${baseURL}/username/${username}/exists`);
    },

    emailExists: (email: string): Promise<boolean> => {
      return get(`${baseURL}/email/${email}/exists`);
    },

    getMyself: (token: string): Promise<void> => {
      return get(`${baseURL}/me`, token);
    },

    registerUser: (userRegistrationData: UserRegistrationData): Promise<void> => {
      return post(`${baseURL}/register`, undefined, userRegistrationData);
    },

    activateUser: (emailCode: string): Promise<void> => {
      return post(`${baseURL}/activate/${emailCode}`);
    },

    getUserInfo: (token: string, userJid: string): Promise<UserInfo> => {
      return get(`${baseURL}/${userJid}/info`, token);
    },

    updateUserInfo: (token: string, userJid: string, userInfo: UserInfo): Promise<void> => {
      return put(`${baseURL}/${userJid}/info`, token, userInfo);
    },
  };
}
