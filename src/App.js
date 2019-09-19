import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import FullPost from "./FullPost";
import Shop from "./Shop"
import Checkout from "./Checkout"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={() => <h1>home</h1>} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={FullPost} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
        </BrowserRouter>
      </div>
    );
  }
}
