import React, { useContext } from 'react';
import Webpages from '../components';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Post from '../components/post';
import PostList from '../components/postList';
import { UserContext } from '../UserContext';

function AuthApp() {
  const { user, logout } = useContext(UserContext);

  return (
    <Router>
           <div className="App">
           <h1>Hello, {user.name}!</h1>
           <button onClick={logout}>Logout</button>

            <ul className="App-header">
              <li>
                <Link to="/postlist">Posts</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/postlist' element={< PostList />}></Route>
                 <Route exact path='/postlist/post/:id' element={< Post/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default AuthApp;
