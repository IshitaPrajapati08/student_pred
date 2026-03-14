import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { userRole, logout } = useAuth();

  const linkClasses = "flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors";
  const activeLinkClasses = "bg-gray-900 text-white";

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col">
      <div className="px-4 py-6">
        <h2 className="text-2xl font-semibold text-white">KenexAI</h2>
      </div>
      <nav className="flex-grow px-4">
        <ul className="space-y-3">
          {userRole === 'student' && (
            <li>
              <NavLink to="/student-dashboard" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                My Dashboard
              </NavLink>
            </li>
          )}
          {userRole === 'faculty' && (
            <li>
              <NavLink to="/faculty-dashboard" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                Faculty Dashboard
              </NavLink>
            </li>
          )}
          {userRole === 'admin' && (
            <li>
              <NavLink to="/admin-dashboard" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                Admin Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="px-4 py-4">
        <button onClick={logout} className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;