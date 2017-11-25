export interface Session {
  token: string;
}

export async function logIn(username: string, password: string): Promise<Session|null> {
  const response = await fetch('http://localhost:9001/api/v2/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
    mode: 'cors',
  });

  if (response.status === 403) {
    return Promise.resolve(null);
  }

  if (response.status !== 200) {
    throw new Error();
  }

  return response.json();
}
