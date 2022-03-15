import React from "react";

export const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Post</h3>
      <input placeholder="Title" name="title" />
      <input placeholder="Body" name="body" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
