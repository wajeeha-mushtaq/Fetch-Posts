import React from "react";

export const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
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
