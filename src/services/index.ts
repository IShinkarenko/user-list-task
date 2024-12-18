import { User } from './types';

export const getUsers = async () => {
  const response = await fetch('https://67603be46be7889dc35d47e7.mockapi.io/api/v1/users')
    .then((res) => res.json() as Promise<User[]>);

  return response;
};

export const addUser = async (user: Partial<User>) => {
  const response = await fetch('https://67603be46be7889dc35d47e7.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: new Date().toISOString()
    }),
  });

  return response;
};
