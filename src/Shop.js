import React, { Component } from "react";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "NAME",
        age: 34,
        color: "blue"
      }
    };
  }

  confirm = () => {
    const query = [];
    for (const i in this.state.user) {
      query.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.user[i])}`);
    }
    const queryString = query.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: `?${queryString}`
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.confirm()}>button</button>
      </div>
    );
  }
}
