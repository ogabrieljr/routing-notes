import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import { Link } from "react-router-dom";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data.slice(0, 5) });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Link key={post.id} to={"/" + post.id}>
            <Post title={post.title} body={post.body} />
          </Link>
        ))}
      </div>
    );
  }
}
