type UserListItemProps = {
  id: string;
  name: string;
};

export const UserListItem = ({ id, name }: UserListItemProps) => {
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
    <li className='flex justify-between gap-x-6 py-5 hover:bg-gray-50/50 rounded-lg transition-all duration-300 hover:translate-x-2'>
      <div className='flex min-w-0 gap-x-4'>
        <div
          className={`size-12 flex-none rounded-full bg-${getRandomColor()}-100 ring-2 ring-${getRandomColor()}-500/20 flex items-center justify-center font-semibold text-${getRandomColor()}-700 hover:rotate-12 transition-transform duration-300`}
        >
          {getInitials(name)}
        </div>
        <div className='min-w-0 flex-auto'>
          <p className='text-sm/6 font-semibold text-gray-900'>{name}</p>
          <p className='mt-1 truncate text-xs/5 text-gray-500'>ID: {id}</p>
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
  );
};
