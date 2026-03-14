import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './routes/ProtectedRoute';
import RoleBasedRedirect from './routes/RoleBasedRedirect';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex">
      {isAuthenticated && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {isAuthenticated && <Navbar />}
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            <Route path="/" element={isAuthenticated ? <RoleBasedRedirect /> : <Navigate to="/signup" />} />

            <Route element={<ProtectedRoute allowedRoles={['student']} />}>
              <Route path="/student-dashboard" element={<StudentDashboard />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={['faculty']} />}>
              <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;