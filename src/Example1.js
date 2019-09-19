import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

export default class Example1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={() => <h1>home</h1>} />
          <Route path="/posts" component={Posts} />
          <Route path="/fullpost/:postid" component={FullPost} />
        </BrowserRouter>
      </div>
    );
  }
}

function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>home</li>
      </Link>
      <Link to="/posts">
        <li>posts</li>
      </Link>
    </ul>
  );
}

function Posts({ history }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const loadPost = id => {
    history.push(`/fullpost/${id}`);
  };

  return (
    <div>
      {posts.map(post => (
        <h3 onClick={() => loadPost(post.id)} key={post.id}>
          {post.title}
        </h3>
      ))}
    </div>
  );
}

function FullPost({ match }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${match.params.postid}`
      );
      const post = await res.json();
      setPost(post);
    };
    fetchPost();
  }, []);

  if (post.length === 0) return <h1>loading</h1>;
  else {
    return (
      <div>
        <h1>
          {post.id}, {post.title}
        </h1>
        <h5>{post.userId}</h5>
        <p>{post.body}</p>
      </div>
    );
  }
}
