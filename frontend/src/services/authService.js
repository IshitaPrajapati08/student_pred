import { mockUsers } from '../data/mockUsers';

export const authService = {
  login: (email, password, role) => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
  },

  signup: (name, email, password, role) => {
    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      throw new Error('User with this email already exists.');
    }
    const newUser = { name, email, password, role };
    mockUsers.push(newUser);
    return newUser;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },
};