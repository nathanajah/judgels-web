import { get } from '../http';

export interface WebConfig {
  recaptcha?: {
    siteKey: string;
  };
  userRegistration: {
    useRecaptcha: boolean;
  };
}

export function createWebAPI() {
  const baseURL = `${(window as any).env.JOPHIEL_API_URL}/web`;

  return {
    getConfig: (): Promise<WebConfig> => {
      return get(`${baseURL}/config`);
    },
  };
}
