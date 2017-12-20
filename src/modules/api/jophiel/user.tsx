import { get, post, put } from '../http';

export interface User {
  jid: string;
  username: string;
}

export interface UserProfile {
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

    getUserProfile: (token: string, userJid: string): Promise<UserProfile> => {
      return get(`${baseURL}/${userJid}/profile`, token);
    },

    updateUserProfile: (token: string, userJid: string, userProfile: UserProfile): Promise<void> => {
      return put(`${baseURL}/${userJid}/profile`, token, userProfile);
    },
  };
}
