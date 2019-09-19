import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
  };

  const func = id => {
    props.history.push(`/posts/${id}`);
  };

  return (
    <div>
      {/* {posts.map(post => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <h3>{post.title}</h3>
        </Link>
      ))} */}
      <button onClick={() => props.history.push("/")}>back</button>

      <button onClick={() => props.history.push("/shop")}>shop</button>

      {posts.map(post => (
        <h3 onClick={() => func(post.id)} key={post.id}>
          {post.title}
        </h3>
      ))}
    </div>
  );
}
