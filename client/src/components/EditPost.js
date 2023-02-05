import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./style.scss";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cat, setCat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${id}`);
      setTitle(res.data.title);
      setBody(res.data.body);
      setCat(res.data.category_id);
      console.log(res.data);
    };
    getPost();
  }, []);

  const editPost = async (e) => {
    e.preventDefault();
    await axios.put(`/posts/${id}`, {
      title: title,
      body: body,
      category_id: parseInt(cat),
    });
    navigate("/");
  };
  return (
    <div className="editForm">
      <form style={{ marginTop: "30px" }} onSubmit={editPost}>
        <h1>Edit Post</h1>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">body</label>
        <textarea
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="5"
        ></textarea>
        <label htmlFor="category">Category id</label>
        <input
          type="number"
          id="category"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EditPost;
