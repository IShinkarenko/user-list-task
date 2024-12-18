/**
 * ! Example for use react query on client component using hydrate from server
 */
'use client';

import { useUsers, useAddUser } from '@/hooks/useUsers';

import { useState } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`min-h-[32px] px-3 py-1.5 flex items-center gap-2 rounded-md
        bg-gradient-to-b from-[#47ACD7] to-[#3671C9] text-white
        hover:brightness-95
        focus:shadow-[0px_0px_0px_3px_#7FBDD966] focus:outline-none
        active:bg-[linear-gradient(180deg,_#47ACD7_0%,_#3671C9_100%),_linear-gradient(0deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3))]
        transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

const Home = () => {
  const users = useUsers();
  const addUserMutation = useAddUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '' });

  // Generate random color for avatar background
  const getRandomColor = () => {
    const colors = ['purple', 'pink', 'blue', 'green', 'yellow', 'red'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

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
        <div className='absolute -top-10 -left-10 w-20 h-20 bg-purple-100 rounded-full blur-xl opacity-60 animate-pulse'></div>
        <div className='absolute -bottom-10 -right-10 w-20 h-20 bg-pink-100 rounded-full blur-xl opacity-60 animate-pulse'></div>
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
              <li
                key={user.id}
                className='flex justify-between gap-x-6 py-5 hover:bg-gray-50/50 rounded-lg transition-all duration-300 hover:translate-x-2'
              >
                <div className='flex min-w-0 gap-x-4'>
                  <div
                    className={`size-12 flex-none rounded-full bg-${getRandomColor()}-100 ring-2 ring-${getRandomColor()}-500/20 flex items-center justify-center font-semibold text-${getRandomColor()}-700 hover:rotate-12 transition-transform duration-300`}
                  >
                    {getInitials(user.name)}
                  </div>
                  <div className='min-w-0 flex-auto'>
                    <p className='text-sm/6 font-semibold text-gray-900'>
                      {user.name}
                    </p>
                    <p className='mt-1 truncate text-xs/5 text-gray-500'>
                      ID: {user.id}
                    </p>
                  </div>
                </div>
                <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
                  <div className='mt-1 flex items-center gap-x-1.5'>
                    <div className='flex-none rounded-full bg-emerald-500/20 p-1 animate-pulse'>
                      <div className='size-1.5 rounded-full bg-emerald-500'></div>
                    </div>
                    <p className='text-xs/5 text-gray-500'>Active</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm animate-fadeIn'>
          <div className='bg-white rounded-xl p-6 w-full max-w-md animate-slideIn'>
            <div className='flex items-center gap-3 mb-6'>
              <h3 className='text-lg font-semibold'>Add New User</h3>
            </div>
            <div className='space-y-4'>
              <div>
                <label className='block text-[#76767D] font-inter text-[14px] font-semibold leading-[18.2px] tracking-[-0.005em] mb-1'>
                  First Name
                </label>
                <input
                  type='text'
                  value={newUser.firstName}
                  onChange={e =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                  className='w-[400px] h-[36px] min-h-[36px] px-3 py-2 bg-white border border-[#DDDDE1] rounded-lg focus:outline-none focus:shadow-[0px_0px_0px_3px_#7FBDD966] transition-all duration-300'
                />
              </div>
              <div>
                <label className='block text-[#76767D] font-inter text-[14px] font-semibold leading-[18.2px] tracking-[-0.005em] mb-1'>
                  Last Name
                </label>
                <input
                  type='text'
                  value={newUser.lastName}
                  onChange={e =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                  className='w-[400px] h-[36px] min-h-[36px] px-3 py-2 bg-white border border-[#DDDDE1] rounded-lg focus:outline-none focus:shadow-[0px_0px_0px_3px_#7FBDD966] transition-all duration-300'
                />
              </div>
              <div className='flex justify-end gap-3 mt-6'>
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button
                  onClick={() => {
                    addUserMutation.mutate({
                      firstName: newUser.firstName,
                      lastName: newUser.lastName,
                      createdAt: new Date().toISOString()
                    });
                    setIsModalOpen(false);
                  }}
                >
                  Add User
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
