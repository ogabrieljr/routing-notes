import React, { Component } from "react";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const users = this.state.users;
    for (const [key, value] of query) {
      users[key] = value;
    }
    this.setState({ users });
  }

  render() {
    return (
      <div>
        <h1>{console.log(this.state.users)}</h1>
      </div>
    );
  }
}
