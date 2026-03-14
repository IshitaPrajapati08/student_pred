import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Student Dashboard</h1>
      <div className="flex items-center">
        <input type="text" placeholder="Search..." className="border rounded-md p-2 mr-4" />
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Navbar;