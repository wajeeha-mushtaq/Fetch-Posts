import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function Post() {
  const {user} = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      {user}
    </div>
  );
}
