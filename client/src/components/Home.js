import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const res = await axios.get("/posts");
    setPosts(res.data);
  };
  const deletePost = async (postId) => {
    try {
      axios.delete(`/posts/${postId}`);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h1>{post.title}</h1>
          <small>category: {post.name}</small>
          <p>{post.body}</p>
          <Link to={`edit/${post.id}`}>
            <button className="edit">edit</button>
          </Link>
          <Link to={`post/${post.id}`}>
            <button className="detail">detail</button>
          </Link>
          <button onClick={() => deletePost(post.id)} className="hapus">
            hapus
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
