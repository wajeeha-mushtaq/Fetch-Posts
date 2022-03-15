import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Post = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Title" name="title" defaultValue={title} />
          <input placeholder="Body" name="body" defaultValue={body} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="post">
          <Link to={`post/${id}`}>
            <span className="post-name">{title}</span>
          </Link>
          <br/>
          <span className="post-email">{body}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
