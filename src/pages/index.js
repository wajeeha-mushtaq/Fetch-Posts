import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function Index() {
  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      {user}
      <button onClick={() => setUser("John")}>Change User</button>
    </div>
  );
}
