import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = `SELECT posts.id, posts.title, posts.body, categories.name FROM posts JOIN categories ON (categories.id = posts.category_id) ORDER BY posts.id DESC`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q = `SELECT posts.id, posts.title, posts.body, posts.category_id ,categories.name FROM posts JOIN categories ON (categories.id = posts.category_id) where posts.id=?`;
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const q = "INSERT INTO posts (`title`, `body`, `category_id`) VALUES (?)";
  const values = [req.body.title, req.body.body, req.body.category_id];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been created.");
  });
};

export const deletePost = (req, res) => {
  const postId = req.params.id;
  const q = "DELETE FROM posts WHERE `id` = ?";
  db.query(q, postId, (err, data) => {
    return res.json("post have been deleted!");
  });
};

export const updatePost = (req, res) => {
  const postId = req.params.id;
  const q =
    "UPDATE posts SET `title`=?, `body`=?, `category_id`=? WHERE `id`= ?";
  const values = [req.body.title, req.body.body, req.body.category_id];

  db.query(q, [...values, postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been updated.");
  });
};
