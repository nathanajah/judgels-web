import { ForbiddenError, RemoteError, UnauthorizedError } from './error';

async function call(url: string, init: RequestInit): Promise<any> {
  let response: Response;
  try {
    response = await fetch(url, init);
  } catch (error) {
    throw new RemoteError();
  }

  if (response.status === 401) {
    throw new UnauthorizedError();
  }
  if (response.status === 403) {
    throw new ForbiddenError();
  }
  if (response.status < 200 || response.status >= 300) {
    throw new RemoteError();
  }

  return response.json().catch(() => { return; });
}

export async function get(url: string, token?: string): Promise<any> {
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const init: RequestInit = {
    method: 'GET',
    mode: 'cors',
    headers: { ...authHeader },
  };
  return call(url, init);
}

export async function post(url: string, token?: string, body?: any): Promise<any> {
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
  const bodyJson = body ? { body: JSON.stringify(body) } : {};

  const init: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader,
    },
    ...bodyJson,
  };
  return call(url, init);
}
