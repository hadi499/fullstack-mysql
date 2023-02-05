import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cat, setCat] = useState("");
  const navigate = useNavigate();

  const addPost = async (e) => {
    e.preventDefault();
    await axios.post("/posts", {
      title: title,
      body: body,
      category_id: parseInt(cat),
    });
    navigate("/");
  };
  return (
    <div className="addForm">
      <form onSubmit={addPost}>
        <h1>Add Post</h1>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="body">body</label>
        <textarea
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="5"
          required
        ></textarea>
        <label htmlFor="category">Category id</label>
        <input
          type="number"
          id="category"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          required
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddPost;
