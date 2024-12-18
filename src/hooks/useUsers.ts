import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getUsers, addUser } from '@/services';
import { User } from '@/services/types';


export const getUsersKey = () => ['users'];


export const useUsers = () => {
  const {data} = useQuery({
    queryKey: getUsersKey(),
    queryFn: getUsers,
    select: (data: User[]) => data.map((user) => ({ ...user, name: user.firstName + ' ' + user.lastName })).reverse()
  });

  return data;
};

export type NewUser = Pick<User, 'firstName' | 'lastName' | 'createdAt'>;

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: NewUser) => addUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersKey() });
    }
  });
};
