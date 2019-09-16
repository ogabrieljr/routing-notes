import React, { Component } from "react";
import axios from "axios";

export default class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
      .then(res => {
        this.setState({ post: res.data });
      });
  }

  render() {
    return (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}
