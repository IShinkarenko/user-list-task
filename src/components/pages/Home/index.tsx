'use client';

import AddUserModal from '@/components/add-user';
import { Button } from '@/components/button';
import { UserListItem } from '@/components/user-list-item';
import { useUsers, useAddUser, NewUser } from '@/hooks/useUsers';
import { useState, useCallback } from 'react';

const Home = () => {
  const users = useUsers();
  const addUserMutation = useAddUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewUser = useCallback(
    (data: NewUser) => {
      addUserMutation.mutate(data);
      setIsModalOpen(false);
    },
    [addUserMutation]
  );

  return (
    <div className='p-4'>
      <div className='text-center mb-20'>
        <div className='inline-block mt-7 px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4 animate-bounce'>
          🚀 Test Task
        </div>
        <h1 className='text-[48px] font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300'>
          Welcome to Users Dashboard
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          This Test Project Based on React Query & Next.js is a magical
          playground where users appear and disappear with the grace of React
          Query's enchanting state management. 🪄
        </p>
        <p className='text-sm text-gray-500 mt-6'>
          Created with ❤️ by{' '}
          <span className='font-medium text-purple-600 '>Ivan Shynkarenko</span>
        </p>
      </div>

      <div className='relative mb-16'>
        <div className='bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-4'>
              <div className='size-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-spin-slow'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <div>
                <h2 className='text-xl font-semibold text-gray-900'>
                  Test Users Database
                </h2>
              </div>
            </div>
            <Button onClick={() => setIsModalOpen(true)} className='group'>
              Add User
            </Button>
          </div>

          <ul role='list' className='divide-y divide-gray-100'>
            {users?.map(user => (
              <UserListItem key={user.id} id={user.id} name={user.name} />
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <AddUserModal
          onSubmit={addNewUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
