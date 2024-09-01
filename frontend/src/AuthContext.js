import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Provide a hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (email, password) => {
    if (email === 'user@a.com' && password === '1234') {
      setUser({ email });
      return true;
    }
    return false;
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
