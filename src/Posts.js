import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
  };

  return (
    <div>
      {posts.map(post => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <h3>{post.title}</h3>
        </Link>
      ))}
    </div>
  );
}

