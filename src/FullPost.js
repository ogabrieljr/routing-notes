import React, { useState, useEffect } from "react";

export default function FullPost({ match }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const post = await res.json();
    setPost(post);
    console.log(match.params.id);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
