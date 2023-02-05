import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPost = () => {
  const [post, setPost] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${id}`);
      console.log(res.data);
      setPost(res.data);
    };
    getPost();
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <small>category: {post.name}</small>
      <p>{post.body}</p>
    </div>
  );
};

export default DetailPost;
