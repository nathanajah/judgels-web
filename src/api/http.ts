import { ForbiddenError, RemoteError, UnauthorizedError } from '../models/error';

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

  return response.json();
}

export async function get(url: string): Promise<any> {
  const init: RequestInit = {
    method: 'GET',
    mode: 'cors',
  };
  return call(url, init);
}

export async function post(url: string, body?: any): Promise<any> {
  const init: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  };
  return call(url, init);
}
