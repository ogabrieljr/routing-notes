import React, { Component, useEffect, useState } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

export default class Example extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={() => <h1>home</h1>} />
          <Route path="/posts" component={Posts} />
          <Route path="/fullPost/:postId" component={FullPost} />
        </BrowserRouter>
      </div>
    );
  }
}

function Nav() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/posts">
          <li>posts</li>
        </Link>
      </ul>
    </div>
  );
}

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
  };

  const fullPost = id => props.history.push(`/fullpost/${id}`);

  return (
    <div>
      {posts.map(post => (
        <h3 onClick={() => fullPost(post.id)} key={post.id}>
          {post.title}
        </h3>
      ))}
    </div>
  );
}

function FullPost(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.postId}`
      );
      const post = await res.json();
      setPost(post);
    };
    fetchPost();
  });

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
