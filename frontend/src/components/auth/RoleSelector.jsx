import React from 'react';

const RoleSelector = ({ role, setRole }) => {
  const roles = ['student', 'faculty', 'admin'];

  return (
    <div className="flex justify-center space-x-2 my-4">
      {roles.map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          className={`px-4 py-2 rounded-md capitalize ${
            role === r ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default RoleSelector;