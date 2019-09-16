import React, { Component } from "react";
import Nav from "./Nav"
import { BrowserRouter } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Nav />
        </BrowserRouter>
      </div>
    );
  }
}
