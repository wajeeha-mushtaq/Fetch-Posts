import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Post from './post';
import PostList from './postList';

const Webpages = () => {
    return(
        <Router>
          <Routes>
            <Route exact path="/" component= {PostList} />
            <Route path = "/post" component = {Post} />
          </Routes>
        </Router>
    );
};

export default Webpages;
