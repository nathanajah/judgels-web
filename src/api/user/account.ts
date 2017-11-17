export interface SessionToken {
  token: string;
}

export async function logIn(username: string, password: string): Promise<SessionToken|null> {
  const response = await fetch('http://localhost:9001/api/v2/login', {
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
