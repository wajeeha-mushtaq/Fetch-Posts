import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import {Index} from "./pages";
import {Post} from "./pages/post";
import { UserContext } from "./UserContext";

export default function App(){
  const [user, setUser] = useState("a");

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post/">Posts</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/post/" element={<Post />} />
        </Routes>
        </UserContext.Provider>

      </div>
    </Router>
  );
}
