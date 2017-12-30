import { get } from '../http';

export interface WebConfig {
  recaptcha?: {
    siteKey: string;
  };
  userRegistration: {
    enabled: boolean;
    useRecaptcha: boolean;
  };
}

export function createWebAPI() {
  const baseURL = `${(window as any).env.JOPHIEL_URL}/web`;

  return {
    getConfig: (): Promise<WebConfig> => {
      return get(`${baseURL}/config`);
    },
  };
}
