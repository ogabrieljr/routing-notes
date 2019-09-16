import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import FullPost from "./FullPost";
import "./app.css";

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink exact to="/">
          HOME{" "}
        </NavLink>
        <NavLink to="/Post">POSTS </NavLink>
      </nav>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/post" component={Posts} />
        <Route path="/:id" component={FullPost} />
      </Switch>
    </div>
  );
}
