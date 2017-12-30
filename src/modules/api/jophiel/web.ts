import { get } from '../http';

export interface WebConfig {
  recaptchaSiteKey?: string;
  userRegistrationUseRecaptcha: boolean;
}

export function createWebAPI() {
  const baseURL = `${(window as any).env.JOPHIEL_URL}/web`;

  return {
    getConfig: (): Promise<WebConfig> => {
      return get(`${baseURL}/config`);
    },
  };
}
