import { useState } from "react";
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ userId:'', name: '',  email: '', password: '', auth: true });
  var id=10;

  // Login updates the user data with a name parameter
  const log = (name, email, password) => {
    setUser((user) => ({
      userId: id++,
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
    <UserContext.Provider value={{ user, log, logout }}>
      {children}
    </UserContext.Provider>
  );
}
