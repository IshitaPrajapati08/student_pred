import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RoleBasedRedirect = () => {
  const { userRole } = useAuth();

  switch (userRole) {
    case 'student':
      return <Navigate to="/student-dashboard" replace />;
    case 'faculty':
      return <Navigate to="/faculty-dashboard" replace />;
    case 'admin':
      return <Navigate to="/admin-dashboard" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

export default RoleBasedRedirect;