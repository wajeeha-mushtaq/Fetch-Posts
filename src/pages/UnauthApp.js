import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

function UnauthApp() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Please, log in!</h1>

      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label>Email:</label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <label>Password:</label>
      <input
        type="text"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={() => login(name, email, password)}>Log in</button>
    </>
  );
}

export default UnauthApp;
