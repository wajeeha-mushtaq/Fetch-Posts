import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import AuthApp from './pages/AuthApp';
import UnauthApp from './pages/UnauthApp';

function App() {
  const { user } = useContext(UserContext);

  return user.auth ? <AuthApp /> : <UnauthApp />;
}

export default App;
