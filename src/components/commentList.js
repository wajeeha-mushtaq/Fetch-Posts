import React, { useEffect, useState } from "react";
import { Comment } from "./comment";
import { AddComment } from "./addComment";

export default function CommentList({postId}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (name, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
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
        setComments((comments) => [...comments, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, name, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
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
        const updatedPosts = comments.map((post) => {
          if (post.id === id) {
            post.name = name;
            post.body = body;
          }

          return post;
        });

        setComments((comments) => updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          // console.log(id);
          return;
        } else {
          setComments(
            comments.filter((comment) => {
              return comment.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Comments</h1>
      <AddComment onAdd={onAdd} />
      {comments.map((comment) => (
        <Comment
          id={comment.id}
          key={comment.id}
          name={comment.name}
          body={comment.body}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
