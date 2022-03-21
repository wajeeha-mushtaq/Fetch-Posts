import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostList from '../components/postList';
import SinglePost from '../components/singlePost';
import { UserContext } from '../UserContext';

function AuthApp() {
  const { user, logout } = useContext(UserContext);

  return (
    <Router>
      <div className="App">
        <h1>Hello, {user.name}!</h1>
        <h1>{user.userId}</h1>
        <button onClick={logout}>Logout</button>

        <ul className="App-header">
          <li>
            <Link to="/postlist">Posts</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/postlist' element={< PostList />}></Route>
          <Route path='/postlist/post/:id' element={< SinglePost />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AuthApp;
