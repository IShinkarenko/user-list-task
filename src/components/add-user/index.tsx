import React, { useState } from 'react';
import { Button } from '../button';
import { NewUser } from '@/hooks/useUsers';

type AddUserModalProps = {
  onClose: () => void;
  onSubmit: (input: NewUser) => void;
};

const AddUserModal = ({ onClose, onSubmit }: AddUserModalProps) => {
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '' });

  const handleSubmit = () => {
    onSubmit({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      createdAt: new Date().toISOString()
    });
  };

  return (
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
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={handleSubmit}
              disabled={!newUser.firstName || !newUser.lastName}
            >
              Add User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
