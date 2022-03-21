import React, { useEffect, useState, useContext } from "react";
import { Post } from "./post";
import { AddPost } from "./addPost";
import { UserContext } from '../UserContext';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  };

  const onAdd = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        //userId:10,
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
        console.log(posts);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            post.title = title;
            post.body = body;
          }
          return post;
        });

        setPosts((posts) => updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <AddPost onAdd={onAdd} />
      {posts.map((post) => (
        console.table(user),
        user.userId == post.userId?
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
            onEdit={onEdit}
            onDelete={onDelete}
          /> :
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
      ))}
    </div>
  );
}
