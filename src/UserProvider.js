import { useState } from "react";
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: '',  email: '', password: '', auth: true });

  // Login updates the user data with a name parameter
  const login = (name, email, password) => {
    setUser((user) => ({
      name: name,
      email: email,
      password: password,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: '',
      email: '',
      password: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
